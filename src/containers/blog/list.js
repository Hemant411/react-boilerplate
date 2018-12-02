import React, { Component } from 'react'

import Loader from '../../components/common/loader';
import { getBlog } from '../../utils/api_calls';
import BlogList from '../../components/blog/list';

class ListBlog extends Component {

	state = {
		blogs: [],
		loading: true,
	}

	componentDidMount() {
		this.fetchBlog()
	}

	fetchBlog = async () => {
		const blogs = await getBlog()
		this.setState({ blogs, loading: false })
	}

	navigateToView = (id) => {
		this.props.history.push(`/blogs/${id}/view`)
	}

	render() {
		const { blogs, loading, is_more, loadingMore } = this.state

		if (loading) {
			return <Loader />
		}

		return (
			<div>
				<div>Blogs</div>
				<BlogList blogs={blogs} is_more={is_more} navigateToView={this.navigateToView} loadMoreBlog={this.loadMoreBlog} loadingMore={loadingMore} />
			</div>
		)
	}
}

export default ListBlog
