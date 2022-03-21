import React from "react";

const App: React.FC = () => { // FC stands for functional component
	const [recipes, setRecipes] = React.useState<[]>([]);
	const [search, setSearch] = React.useState<string>("");
	return <div>App</div>;
};

export default App;
