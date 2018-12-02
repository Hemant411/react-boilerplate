import React from 'react'

const BlogItem = ({ blog, navigateToView }) => {
	return (
		<div onClick={() => navigateToView(blog._id)}>
			<div><span>{blog.title ? blog.title : 'NA'}</span></div>
			<div><span>{blog.description ? blog.description : 'NA'}</span></div>
		</div>
	)
}

export default BlogItem
