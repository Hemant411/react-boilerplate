import React, { Component } from 'react'
import Button from '../../components/common/button';

import Input from '../common/input';
import Loader from '../common/loader';

export default class CreateEditBlog extends Component {

	constructor(props) {
		super(props)

		this.isEdit = props.isEdit
		this.state = {
			users: [],
			_id: props._id ? props._id : null,
			title: props.title ? props.title : '',
			description: props.description ? props.description : '',
			loading: true,
			errors: {},
		}
	}

	validate = () => {
		const errors = {}
		const { title } = this.state
		let isError = false
		if (title.trim().length <= 0) {
			errors.title = 'Please enter valid title'
			isError = true
		}

		this.setState({ errors })
		return isError
	}

	handleDrop = dropped => {
		this.setState({ image: dropped[0] })
	}

	clearInput = () => {
		this.setState({
			title: '',
			description: '',
		})
	}

	submit = async (e) => {
		e.preventDefault()
		if (this.validate()) {
			return
		}
		const data = { ...this.state }
		this.setState({ loading: true })

		try {
			await this.props.submitBlog(data, this.state._id)
			if (!this.isEdit) {
				this.clearInput()
			}
			this.setState({ loading: false })
		} catch (e) {
			this.setState({ loading: false })
			console.log('e', e)
		}
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {

		const { loading, title, description, errors } = this.state
		if (loading) {
			return <Loader />
		}

		return <div>
			<form onSubmit={this.submit} >
				<div>
					<Input name="title" value={title} error={errors.title} placeholder="title" onChange={this.handleInputChange} />
				</div>
				<div>
					<textarea value={description} name="description" placeholder="description" onChange={this.handleInputChange} />
				</div>
				<div>
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</div >
	}
}
