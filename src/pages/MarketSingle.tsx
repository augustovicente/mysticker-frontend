import React from 'react'
import BaseTemplate from 'Components/BaseTemplate'
import WeekFeatures from '../Components/IndexOne/WeekFeatures'
import Breadcrumb from '../Components/InnerPages/marketsingle/Breadcrumb'
import SingleMarket from '../Components/InnerPages/marketsingle/SingleMarket'


const MarketSingle = () => {
    return (
        <BaseTemplate>
            <Breadcrumb />
            <SingleMarket />
            <WeekFeatures />
        </BaseTemplate>
    )
}

export default MarketSingle
