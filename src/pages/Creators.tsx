import React from 'react'
import BaseTemplate from 'Components/BaseTemplate'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'
import WeekFeatures from '../Components/IndexOne/WeekFeatures'

import Creatorpage from '../Components/InnerPages/Creatorpage'

const Creators = () => {
    return (
        <BaseTemplate>
            <Banner title="NFT Marketplace" />
            <Category />
            <Creatorpage />
            <WeekFeatures />
        </BaseTemplate>
    )
}

export default Creators
