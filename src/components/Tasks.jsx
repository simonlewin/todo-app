import React, { Component } from "react";

// shows a list of tasks
class Tasks extends Component {
  componentDidMount() {
		this.props.onLoad();
  }
  
  onClick(e, id) {
    console.log(id);
		this.props.onClick();
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
              <li className="list-group-item list-group-item-action" onClick={e => this.onPress(e, task.id)} key={ task.id }>
                {task.completed ? <p><s>{ task.task }</s> &#x2714;</p> : <b>{ task.task }</b>}
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
