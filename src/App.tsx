import React from "react";
import FormInput from "./components/FormInput";

const App: React.FC = () => {
	// FC stands for functional component
	return (
		<div className="main">
			<h1>
				buy<span>List</span>
			</h1>
			<FormInput />
		</div>
	);
};

export default App;
