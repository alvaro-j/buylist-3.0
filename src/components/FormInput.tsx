import React from "react";

const FormInput: React.FC = () => {
	const [itemName, setItemName] = React.useState<string>("");
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setItemName(event.target.value);
	};
	return (
		<form>
			<input
				type="text"
				required
				placeholder="Which items would you like to buy?"
				value={itemName}
				onChange={handleChange}
			/>
			<button type="submit">Add</button>
		</form>
	);
};

export default FormInput;
