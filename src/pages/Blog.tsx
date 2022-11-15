import React from 'react'
import BaseTemplate from 'Components/BaseTemplate'
import BlogContent from '../Components/Blog/BlogContent'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'

const Blog = () => {
    return (
        <BaseTemplate>
            <Banner title="Latest News" />
            <Category />
            <BlogContent />
        </BaseTemplate>
    )
}

export default Blog
