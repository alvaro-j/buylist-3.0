import React from "react";

export const DataContext = React.createContext(null);

const DataProvider: React.FC = () => {
	const [items, setItems] = React.useState([]);
	return <div>DataProvider</div>;
};

export default DataProvider;
