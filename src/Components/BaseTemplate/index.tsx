import React, { ReactNode, useContext } from 'react'
import Footer from 'Components/BaseTemplate/components/Footer/Footer'
import Header from 'Components/BaseTemplate/components/Header/Header'
import styled from 'styled-components'
import SideBar from './components/SideBar'
import { useAuth } from 'contexts/auth.context'
import { SideBarContainer } from './components/SideBar/styles'

type BaseTemplateProps = {
    sidebar?: boolean;
    header?: boolean;
    footer?: boolean;
    children: ReactNode;
}

const BaseTemplateContainer = styled.div`
    display: flex;
`

const BaseTemplateMainContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-left: 84px;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`

const BaseTemplateMain = styled.main`
    padding-bottom: 24px;
    background: url('assets/img/others/world.png') no-repeat center/contain;
    border-top-left-radius: 0px;

    &:has(main#home-mysticker) {
        background: unset;
        padding: 0;
    }

    @media (max-width: 768px) {
        padding: 0 22px 98px 22px;
    }
`

const BaseTemplate = ({ sidebar = true, header = true, footer = true, children }: BaseTemplateProps) => {
    return (
        <BaseTemplateContainer>
            {sidebar && <SideBar />}
            <BaseTemplateMainContentComponent
                footer={footer}
                header={header}
            >
                {children}
            </BaseTemplateMainContentComponent>
        </BaseTemplateContainer>
    )
}

const BaseTemplateMainContentComponent = ({ children, header, footer }: { children: ReactNode, header?: boolean, footer?: boolean }) => {
    const { user } = useAuth();

    return (
        <BaseTemplateMainContent>
            {header && <Header />}
            <BaseTemplateMain>
                {children}
            </BaseTemplateMain>
            {footer && <Footer />}
        </BaseTemplateMainContent>
    )
}

export default BaseTemplate
