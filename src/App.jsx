import React, { Fragment } from "react";

import Header from "./components/Header";

import Input from "./containers/Input";

import Tasks from "./containers/Tasks";

const App = () => (
	<Fragment>
    <Header>To Do</Header>
    <Input />
    <Tasks />
	</Fragment>
);

export default App;
