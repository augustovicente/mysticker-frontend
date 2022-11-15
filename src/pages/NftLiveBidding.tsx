import React from 'react'
import Banner from '../Components/Explore/Banner'
import ExploreProduct from '../Components/IndexOne/ExploreProduct'
import Category from '../Components/Category/Category'
import BaseTemplate from 'Components/BaseTemplate'

const NftLiveBidding = () => {
    return (
        <BaseTemplate>
            <Banner title="NFT Live Bidding" />
            <Category />
            <ExploreProduct />
        </BaseTemplate>
    )
}

export default NftLiveBidding
