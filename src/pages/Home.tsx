import React from 'react'
import IndexOne from 'Components/IndexOne/IndexOne'
import BaseTemplate from 'Components/BaseTemplate'
import { useAuth } from 'contexts/auth.context'

const Home = () => {
    const { user } = useAuth()

    return (
        <>
            {user ? (
                <IndexOne />

            ) : (
                <BaseTemplate>
                    <IndexOne />
                </BaseTemplate>
            )}
        </>
    )
}

export default Home
