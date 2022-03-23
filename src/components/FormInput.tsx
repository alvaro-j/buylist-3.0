import React from "react";

const FormInput: React.FC = () => {
	return (
		<form>
			<input
				type="text"
				name="items"
				id="items"
				required
				placeholder="Which items would you like to buy?"
				value=""
			/>
			<button type="submit">Add</button>
		</form>
	);
};

export default FormInput;
