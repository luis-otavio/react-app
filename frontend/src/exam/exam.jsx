import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import ExamForm from './examForm';
import ExamList from './examList';

const URL = 'http://localhost:3003/api/exams';

export default class Exam extends Component {
	constructor(props) {
		super(props);
		this.state = { 	name: '',
						type: '',
						date: '',
						list: [] };
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeType = this.handleChangeType.bind(this);
		this.handleChangeDate = this.handleChangeDate.bind(this);

		this.handleAdd = this.handleAdd.bind(this);
		this.handleSearch = this.handleSearch.bind(this)
		this.handleClear = this.handleClear.bind(this)

		this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
		this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
		this.handleRemove = this.handleRemove.bind(this)
		this.refresh()
	}
	handleChangeName(a) {
		this.setState({ ...this.state, name: a.target.value });
	}
	handleChangeType(b) {
		this.setState({ ...this.state, type: b.target.value });
	}
	handleChangeDate(c) {
		this.setState({ ...this.state, date: c.target.value });
	}
	refresh(name = '') {
		const search = name ? `&name__regex=/${name}/` : ''
			axios.get(`${URL}?sort=-created${search}`)
			.then(resp => this.setState({...this.state, name, list:
			resp.data}))
		}
	handleSearch() {
		this.refresh(this.state.name)
	}
	handleAdd() {
		const name = this.state.name;
		const type = this.state.type;
		const date = this.state.date;
		axios.post(URL, { name, type, date })
			.then(resp => this.refresh())
	}
	handleMarkAsDone(exam) {
		axios.put(`${URL}/${exam._id}`, { ...exam, done: true })
		.then(resp => this.refresh())
	}
	handleMarkAsPending(exam) {
		axios.put(`${URL}/${exam._id}`, { ...exam, done: false })
		.then(resp => this.refresh())
	}
	handleRemove(exam) {
		axios.delete(`${URL}/${exam._id}`)
		.then(resp => this.refresh())
	}
	handleClear() {
		this.refresh()
	}
	render() {
		return (
			<div>
				<PageHeader name="Exames" small="Cadastro" />
				<ExamForm
					name={this.state.name}
					type={this.state.type}
					date={this.state.date}
					handleChangeName={this.handleChangeName}
					handleChangeType={this.handleChangeType}
					handleChangeDate={this.handleChangeDate}
					handleAdd={this.handleAdd}
					handleSearch={this.handleSearch}
					handleClear={this.handleClear}
				/>
				<p/>
				<ExamList 
					list={this.state.list}
					handleMarkAsDone={this.handleMarkAsDone}
					handleMarkAsPending={this.handleMarkAsPending}
					handleRemove={this.handleRemove}	
				/>
			</div>
		);
	}
}
