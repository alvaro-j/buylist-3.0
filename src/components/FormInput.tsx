import React from "react";

const FormInput: React.FC = () => {
	const [itemName, setItemName] = React.useState<string>("");
	return (
		<form>
			<input
				type="text"
				required
				placeholder="Which items would you like to buy?"
				value={itemName}
				onChange={({ target }) => setItemName(target.value)}
			/>
			<button type="submit">Add</button>
		</form>
	);
};

export default FormInput;
