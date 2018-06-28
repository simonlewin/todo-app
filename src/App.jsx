import React, { Fragment } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Input from "./components/Input";

let tasks = {
  data: [
    { id: 1, task: "Buy beer", completed: false },
    { id: 2, task: "Buy fags", completed: false },
    { id: 3, task: "Buy burgers", completed: false },
    { id: 4, task: "Buy ketchup", completed: false },
    { id: 5, task: "Buy charcoal", completed: false },
  ]
}

const fields = [
  { name: "task", label: "Task", value: "" },
];

const App = () => (
	<Fragment>
    <Header>To Do</Header>
    <Input fields={fields} />
    {/* <Tasks tasks={tasks.data} /> */}
	</Fragment>
);

export default App;
