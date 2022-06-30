import React from "react";
import { Item } from "../model";

interface Props {
	itemArray: Item[];
	setItemArray: React.Dispatch<React.SetStateAction<Item[]>>;
}

const List: React.FC<Props> = ({ itemArray, setItemArray }) => {
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
	const [editInputText, setEditInputText] = React.useState<string>("");

	const handleSaveItem = (id: number) => {
		setItemArray(
			itemArray.map((item) => (item.id === id ? { ...item, item: editInputText } : item))
		);
		setEdit(false);
	};

	const handleEditItem = (id: number) => {
		setEdit(!edit);
	}

	return (
		<ul>
			{itemArray.map((item) => (
				<li key={item.id}>
					{edit ? (
						<>
							<input
								type="text"
								id="editValue"
								value={editInputText}
								name="editValue"
								onChange={(e) => setEditInputText(e.target.value.toLocaleLowerCase())}
							/>

							<button className="btn-yellow" onClick={() => handleSaveItem(item.id)}>
								Save
							</button>
						</>
					) : (
						<>
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
								<button
									className="btn-yellow"
									disabled={item.completed}
									onClick={() => {
										if (!edit && !item.completed) {
											handleEditItem(item.id)
										}
									}}
								>
									Edit
								</button>
								<button className="delete" onClick={() => handleDeleteItem(item.id)}>
									Delete
								</button>
							</div>
						</>
					)}
				</li>
			))}
		</ul>
	);
};

export default List;
