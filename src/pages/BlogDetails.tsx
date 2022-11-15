import React from 'react'
import BaseTemplate from 'Components/BaseTemplate'
import BlogDetailsContent from '../Components/Blog/BlogDetailsContent'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'

const BlogDetails = () => {
    return (
        <BaseTemplate>
            <Banner title="News Details" />
            <Category />
            <BlogDetailsContent />
        </BaseTemplate>
    )
}

export default BlogDetails
