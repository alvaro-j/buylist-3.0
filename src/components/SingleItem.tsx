import React from "react";
import { Item } from "../model";


interface Props {
	itemArray: Item[];
}

const SingleItem: React.FC<Props> = ({itemArray}) => {
	return (
		<ul>
			{itemArray.map((item, index) => (
				<li key={index}>{item.item}</li>
			))}
		</ul>
	);
};

export default SingleItem;
