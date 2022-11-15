import React from 'react'
import BaseTemplate from 'Components/BaseTemplate'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'
import RankingPage from '../Components/InnerPages/RankingPage'

const Ranking = () => {
    return (
        <BaseTemplate>
            <Banner title="Nft Ranking" />
            <Category />
            <RankingPage />
        </BaseTemplate>
    )
}

export default Ranking
