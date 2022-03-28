import React from "react";
import FormInput from "./components/FormInput";

const App: React.FC = () => {
	// FC stands for functional component
	const [input, setInput] = React.useState<string>("");
	return (
		<div className="main">
			<h1>
				buy<span>List</span>
			</h1>
			<FormInput input={input} setInput={setInput} />
		</div>
	);
};

export default App;
