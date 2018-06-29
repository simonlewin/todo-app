import React, { Component } from "react";

// shows a list of tasks
class Tasks extends Component {
  componentDidMount() {
		this.props.onLoad();
  }
  
  render () {
    const { tasks } = this.props;
    
    return (
      <React.Fragment>
        { /* check there are tasks to show */ }
        { tasks.length ?
          <ul className="list-group list-group-flush">
            { /* map over each task and display a list item for each one */ }
            { tasks.map(task => (
              <li className="list-group-item list-group-item-action" key={ task.id }>
                { task.task }
              </li>
            ))}
          </ul>
          :
          <p className="alert alert-warning" role="alert">No tasks found</p>
        }
      </React.Fragment>
    );
  };
};

export default Tasks;
