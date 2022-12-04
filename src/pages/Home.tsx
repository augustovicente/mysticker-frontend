import React from 'react'
import IndexOne from 'Components/IndexOne/IndexOne'
import BaseTemplate from 'Components/BaseTemplate'
import { useAuth } from 'contexts/auth.context'
import Footer from 'Components/BaseTemplate/components/Footer/Footer'

const Home = () => {
    const { user } = useAuth()

    return (
        <>
            <>
                <IndexOne />
                <Footer />
            </>
        </>
    )
}

export default Home
