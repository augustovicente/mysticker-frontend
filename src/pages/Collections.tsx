import React from 'react'
import BaseTemplate from 'Components/BaseTemplate'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'
import WeekFeatures from '../Components/IndexOne/WeekFeatures'

const Collections = () => {
  return (
   <BaseTemplate>
            <Banner title="Top collections"/>
            <Category/>
            <WeekFeatures/>
   </BaseTemplate>
  )
}

export default Collections
