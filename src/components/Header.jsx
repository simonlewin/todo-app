import React from "react";

// a simple header component
const Header = ({ children }) => (
	<header className='jumbotron'>
		<h1 className='display-4'>
			{ children }
		</h1>
    <hr className="my-4" />
	</header>
);

export default Header;