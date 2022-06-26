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
		);
	};

	const handleDeleteItem = (id: number) => {
		setItemArray(
			itemArray.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
		);
	};

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
						<button className="delete" onClick={() => {}}>
							Delete
						</button>
					</div>
				</li>
			))}
		</ul>
	);
};

export default SingleItem;
