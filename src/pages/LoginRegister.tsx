import React from 'react'
import BaseTemplate from 'Components/BaseTemplate'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'
import LoginPage from '../Components/InnerPages/LoginPage'

const LoginRegister = () => {
    return (
        <BaseTemplate>
            <Banner title="Registration & Sign In" />
            <Category />
            <LoginPage />
        </BaseTemplate>
    )
}

export default LoginRegister
