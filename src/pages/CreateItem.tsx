import React from 'react'
import BaseTemplate from 'Components/BaseTemplate'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'
import CrItem from '../Components/InnerPages/CrItem'

const CreateItem = () => {
    return (
        <BaseTemplate>
            <Banner title="Create Item" />
            <Category />
            <CrItem />
        </BaseTemplate>
    )
}

export default CreateItem
