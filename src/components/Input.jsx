import React, {Component, Fragment} from "react";

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
		}

		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleChange(e) {
		let value = e.target.value;
		this.setState({value: value});
	}

	onSubmit(e) {
		e.preventDefault();
		const data = this.state.value;
		this.props.onSubmit({task: data});
		this.setState({value: ''});
	}

	render() {
		return (
			<Fragment>
				<form onSubmit={this.onSubmit} className='input-group mb-3'>
					<input className='form-control' onChange={this.handleChange} value={this.state.value} />
					<div className="input-group-append">
						<button className='btn btn-primary'>Add Task</button>
					</div>
				</form>
			</Fragment>
		);
	}
}

export default Input;