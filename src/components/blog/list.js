import React from 'react'
import BlogItem from './item';

const BlogList = ({ blogs, navigateToView, loadingMore }) => {
	return (
		<div>
			{blogs.map((blog) => (
				<BlogItem blog={blog} navigateToView={navigateToView} key={blog._id} />
			))}
		</div>
	)
}

export default BlogList
