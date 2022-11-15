import React, { ReactNode } from 'react'
import Footer from 'Components/Footer/Footer'
import Header from 'Components/Header/Header'
import SideBar from 'Components/IndexOne/SideBar'

type BaseTemplateProps = {
    children: ReactNode;
}

const BaseTemplate = ({ children }: BaseTemplateProps) => {
    return (
        <>
            <SideBar />
            <div className="main-content">
                <Header />

                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default BaseTemplate
