// import our axios config file
import axios from "../axios";

// import the setTitles action
import { 
	setTasks, 
	addTask, 
	removeTask, 
  editTask,
  completeTask 
} from "./state";

export const getTasks = () => dispatch => {
	axios.get("/tasks").then(({ data }) => {
    const tasks = data.data;
    dispatch(setTasks(tasks));
	});
};

export const postTask = data => dispatch => {
	axios.post("/tasks", data).then(({ data }) => {
		const task = data.data;
		dispatch(addTask(task));
	});
};

export const deleteTask = id => dispatch => {
	axios.delete(`/tasks/${id}`).then(() => {
		dispatch(removeTask(id));	
	});
};

export const putTask = (id, data) => dispatch => {
	axios.put(`/tasks/${id}`, data).then(({ data }) => {
		const task = data.data;
		dispatch(editTask(task));
	});
};

export const patchTaskComplete = id => dispatch => {
	axios.patch(`/tasks/${id}/complete`, data).then(({ data }) => {
		const task = data.data;
		dispatch(completeTask(id, task));
	});
}