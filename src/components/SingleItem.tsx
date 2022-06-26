import React from "react";
import { Item } from "../model";

interface Props {
	itemArray: Item[];
	setItemArray: React.Dispatch<React.SetStateAction<Item[]>>;
}

const SingleItem: React.FC<Props> = ({ itemArray, setItemArray }) => {
	const handleDoneItem = (id: number) => {
		setItemArray(
			itemArray.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
			// checks if the id matches the parameter and then change the completed value of it
		);
	};

	const handleDeleteItem = (id: number) => {
		setItemArray(itemArray.filter((item) => item.id !== id));
		// checks if the item.id is different from the id parameter
	};

	const [edit, setEdit] = React.useState<boolean>(false);

	return (
		<ul>
			{itemArray.map((item) => (
				<li key={item.id}>
					<label htmlFor={item.id.toString()} className={item.completed ? "active" : ""}>
						<input
							type="checkbox"
							id={item.id.toString()}
							checked={item.completed}
							onChange={() => handleDoneItem(item.id)}
						/>
						{item.item}
					</label>
					<div>
						<button className="btn-yellow" disabled={item.completed}>
							Edit
						</button>
						<button className="delete" onClick={() => handleDeleteItem(item.id)}>
							Delete
						</button>
					</div>
				</li>
			))}
		</ul>
	);
};

export default SingleItem;
