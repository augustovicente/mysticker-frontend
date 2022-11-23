import React, { ReactNode, useContext } from 'react'
import Footer from 'Components/BaseTemplate/components/Footer/Footer'
import Header from 'Components/BaseTemplate/components/Header/Header'
import styled from 'styled-components'
import SideBar from './components/SideBar'
import { SideBarContext, SideBarProvider } from './components/SideBar/context'
import { useAuth } from 'contexts/auth.context'

type BaseTemplateProps = {
    sidebar?: boolean;
    header?: boolean;
    footer?: boolean;
    children: ReactNode;
}

type BaseTemplateMain = {
    collapsed?: boolean
}

const BaseTemplateContainer = styled.div`
    display: flex;
`

const BaseTemplateMainContent = styled.div<BaseTemplateMain>`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-left: ${props => props.collapsed ? "94px" : "210px"};
    padding: 0 1.5rem;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`

const BaseTemplateMain = styled.main<BaseTemplateMain>`
    padding: 0;
    background: url('assets/img/others/world.png') no-repeat center/contain;
    border-top-left-radius: ${props => props.collapsed ? "0px" : "80px"};

    @media (max-width: 768px) {
        padding: 0 22px 22px 22px;
    }
`

const BaseTemplate = ({ sidebar = true, header = true, footer = true, children }: BaseTemplateProps) => {
    return (
        <>
            <SideBarProvider>
                <BaseTemplateContainer>
                    {sidebar && <SideBar />}
                    <BaseTemplateMainContentComponent
                        footer={footer}
                        header={header}
                    >
                        {children}
                    </BaseTemplateMainContentComponent>
                </BaseTemplateContainer>
            </SideBarProvider>
        </>
    )
}

const BaseTemplateMainContentComponent = ({ children, header, footer }: { children: ReactNode, header?: boolean, footer?: boolean }) => {
    const { isCollapsed } = useContext(SideBarContext);
    const { user } = useAuth();

    return (
        <BaseTemplateMainContent collapsed={isCollapsed}>
            {header && <Header />}
            <BaseTemplateMain collapsed={isCollapsed}>
                {children}
            </BaseTemplateMain>
            {footer && <Footer />}
        </BaseTemplateMainContent>
    )
}

export default BaseTemplate
