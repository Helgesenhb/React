import { useState } from "react";

export type Props = {
	item: string;
	amount: number;
	unit?: string;
};

// Destructuring assignment on Props object to extract out the item property.
const Item = ({ item, amount, unit }: Props): JSX.Element => {
	const [isPicked, setIsPicked] = useState(false);

	return (
		<p className={"item" + (isPicked ? " picked" : "")}>
			<button type="button" onClick={() => setIsPicked(currentIsPicked => !currentIsPicked)}>
				X
			</button>
			{amount}
			{unit}
			{item}
		</p>
	);
};

export { Item };
export default Item;

/**
	
	The rendered paragraph root-tag, is set with a ternary operator, which picks its .css class based
	on whether "isPicked" is true or false (which initially is set to false).
	In short, if "isPicked" is false, then it only applies the .item css class.
	If "isPicked" is true, then it applies the .picked AND the .item.picked class.
	
	The state is changed by applying the useState() hook.
	Whenever the button is clicked, the isPicked state is set to the opposite of its current boolean value.
	In short, if the "isPicked" is currently true, then clicking the button, will set it to false, and vice versa.
 */

/**
	Note, that the state is saved in the browser until you manually re-render the page
	OR, until you restart the application.
	Unless you change the initial state of useState() to something else
	On all other changes, that does not deal with state, the DOM is automatically updated when saving changes locally
 */
