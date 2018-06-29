import React, {Component, Fragment} from "react";

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			tasks: [],
		}

		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleChange(e) {
		let value = e.target.value;
		this.setState({value: value});
	}

	onSubmit(e) {
		e.preventDefault();
		let tasks = this.state.tasks.slice();
		tasks.push(this.state.value);
		this.setState({tasks: tasks, value: ''});
	}

	handleDelete(task) {
		let tasks = this.state.tasks.slice();
		if (tasks.indexOf(task) > -1) {
			tasks.splice(tasks.indexOf(task), 1);
			this.setState({tasks: tasks});
		}	
	}

	render() {
		return (
			<Fragment>
				<form onSubmit={this.onSubmit} className='form-group row'>
					<input className='form-control col-md-10' onChange={this.handleChange} value={this.state.value} />
					<button className='btn btn-primary col-md-2'>Add Task</button>
				</form>
				<ul className='list-group'>
					{ this.state.tasks.map((task, i) => (
						<li className="list-group-item list-group-item-action" key={ i }>
						{/* <button className='btn btn-primary'>Complete</button> */}
						{ task }
						{/* <button className='btn btn-info'>Edit</button> */}
						{/* <button onSubmit={this.handleDelete(task)} className='btn btn-danger'>Delete</button> */}
						</li>
					))}
				</ul>
			</Fragment>
		);
	}
}

export default Input;