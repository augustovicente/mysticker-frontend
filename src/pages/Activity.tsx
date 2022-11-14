import React from 'react'
import BaseTemplate from 'Components/BaseTemplate'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'
import ActivityPage from '../Components/InnerPages/ActivityPage'

const Activity = () => {
    return (
        <BaseTemplate>
            <Banner title="NFT Activity" />
            <Category />
            <ActivityPage />
        </BaseTemplate>
    )
}

export default Activity
