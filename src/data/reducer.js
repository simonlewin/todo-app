const addTask = (state, { task }) => {
  return {
    ...state,
    tasks: state.tasks.concat([task]),
  };
};

const setTasks = (state, { tasks }) => {
  return {
    ...state,
    tasks: tasks,
  };
};

const editTask = (state, { task }) => {
  return {
    ...state,
    tasks: {
      ...state.tasks,
      [task.id]: task,
    },
  };
};

const removeTask = (state, {id}) => {
  let { ...updated } = state.tasks;
  delete updated[id];

  return {
    ...state,
    tasks: updated,
  };
};

const completeTask = (state, {id, complete}) => {
  return {
    ...state,
    tasks: {
      ...state.tasks,
      [id]: {
        ...state.tasks[id],
        complete: complete,
      },
    },
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addTask": return addTask(state, action);
    case "removeTask": return removeTask(state, action);
    case "editTask": return editTask(state, action);
    case "setTasks": return setTasks(state, action);
    case "completeTask": return completeTask(state, action);
    default: return state;
  }
};

export default reducer