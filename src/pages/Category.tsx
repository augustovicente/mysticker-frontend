import React from 'react'
import BaseTemplate from 'Components/BaseTemplate'
import Banner from '../Components/Explore/Banner'
import CategoryItem from '../Components/InnerPages/Categ/CategoryItem'

const Category = () => {
    return (
        <BaseTemplate>
            <Banner title="NFT Browse Category" />
            <CategoryItem />
        </BaseTemplate>
    )
}

export default Category
