import React from "react";
import FormInput from "./components/FormInput";
import { Item } from "./model";

const App: React.FC = () => {
	// FC stands for functional component
	const [input, setInput] = React.useState<string>("");
	const [itemArray, setItemArray] = React.useState<Item[]>([]);

	const handleAddItem = (e: React.FormEvent) => {
		e.preventDefault();
		if (itemArray) {
			// the if statement checks if the arrat exists
			setItemArray([...itemArray, { id: Date.now(), item: input, completed: false }]); // spread the other array items and add the new item
			setInput("");
		}
	};

	return (
		<div className="main">
			<h1>
				buy<span>List</span>
			</h1>
			<FormInput handleAddItem={handleAddItem} input={input} setInput={setInput} />
		</div>
	);
};

export default App;
