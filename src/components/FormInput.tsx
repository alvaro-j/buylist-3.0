import React from "react";

interface Props {
	// create the interface to pass the props to the component,
	// because it needs to specify the types of input and setInput
	input: string;
	setInput: React.Dispatch<React.SetStateAction<string>>;
}

const FormInput: React.FC<Props> = ({ input, setInput }) => {
	// <Props> = it's to define the type of the props

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// on event, that is to define it's type
		setInput(event.target.value);
	};

	return (
		<form>
			<input
				type="text"
				required
				placeholder="Which items would you like to buy?"
				value={input}
				onChange={handleChange}
			/>
			<button type="submit">Add</button>
		</form>
	);
};

export default FormInput;
