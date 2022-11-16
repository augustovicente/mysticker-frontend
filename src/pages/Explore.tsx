import BaseTemplate from 'Components/BaseTemplate'
import React from 'react'
import NftMarket from '../Components/Explore/NftMarket'
import Header from '../Components/BaseTemplate/components/Header/Header'

const Explore = () => {
    return (
        <BaseTemplate>
            <Header />
            <NftMarket />
        </BaseTemplate>
    )
}

export default Explore
