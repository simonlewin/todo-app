export const addTask = ( task ) => ({
  type: 'addTask',
  task: task,
});

export const removeTask = id => ({
  type: 'removeTask',
  id: id,
});

export const editTask = task => ({
  type: 'editTask',
  task: task,  
});

export const setTasks = tasks => {
  return {
    type: "setTasks",
    tasks: tasks,
  };
};

export const completeTask = (id, complete) => {
  return {
      type: "completeTask",
      id: id,
      complete: complete,
  };
};