import React from "react";

const App: React.FC = () => {
	// FC stands for functional component
	return (
		<div>
			<header>
				<form >
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
			</header>
		</div>
	);
};

export default App;
