import Item, { Props as ItemProps } from "./Item";

export type Props = {
	items: ItemProps[];
};

const ItemList = ({ items }: Props): JSX.Element => {
	return (
		<ul>
			<ul>
				{items.map(item => (
					<li key={item.item}>
						<Item item={item.item} amount={item.amount} unit={item.unit} />
					</li>
				))}
			</ul>
		</ul>
	);
};

export { ItemList };
export default ItemList;

// ItemList is currently the top level component (As it is rendered from the App.tsx file (Which is itself the top level of the react app))
// The top level component of the ItemList itself, is <ul></ul>

/**
	The items prop (argument), is of type Array, this gives access to the map() function.
	For each item in items, the map will apply a function, which in this case, re-renders the <Item /> component.
	This is possible (in this case), because the type of items and <Item /> are of the same type (Props)

	The key prop is used to set a unique and deterministic prop on what is returned by the map function.
	React is then able to detect when two or more components have simply changed places, and thus avoid expensive re-renders. 
 */
