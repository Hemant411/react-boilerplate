import React from 'react'
import { Link } from 'react-router-dom'

const LeftSidebar = ({ children }) => {
	return <div className="left-sidebar">
		<Link to="/">Dashboard</Link>
		<Link to="/blogs">Blogs</Link>
		<Link to="/blog/new">Add New Blog</Link>
	</div>
}

export default LeftSidebar
