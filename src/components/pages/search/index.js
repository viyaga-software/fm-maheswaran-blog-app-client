import React from 'react'
import PostList from './components/post-list'
import SideMenu from './components/sidemenu'

const SearchPage = ({ blogs }) => {

    return (
        <div className="container mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold text-primary mb-8">Chess Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                <PostList blogs={blogs} />
                <SideMenu />
            </div>
        </div>
    )
}

export default SearchPage
