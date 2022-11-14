import React from 'react'
import BaseTemplate from 'Components/BaseTemplate'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'
import Authors from '../Components/InnerPages/Authors'

const AuthorProfile = () => {
    return (
        <BaseTemplate>
            <Banner title="Authors Profile" />
            <Category />
            <Authors />
        </BaseTemplate>
    )
}

export default AuthorProfile
