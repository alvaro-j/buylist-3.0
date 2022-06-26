import React from "react";
import { Item } from "../model";

interface Props {
	itemArray: Item[];
}

const SingleItem: React.FC<Props> = ({ itemArray }) => {
	return (
		<ul>
			{itemArray.map((item) => (
				<li key={item.id}>
					<label htmlFor={item.id.toString()} className={item.completed ? "active" : ""}>
						<input type="checkbox" id={item.id.toString()} checked={item.completed} />
						{item.item}
					</label>
					<button className="btn-yellow" disabled={item.completed}>
						Edit
					</button>
				</li>
			))}
		</ul>
	);
};

export default SingleItem;
