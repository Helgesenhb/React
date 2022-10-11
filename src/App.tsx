import "./App.css";
import ItemList from "./ItemList";

function App() {
	const items = [
		{ item: "Cake", amount: 10 },
		{ item: "Flour", amount: 10, unit: "kg" },
		{ item: "Apples", amount: 5 }
	];

	return <ItemList items={items} />;
}

export default App;

/**
  The top level of the React application itself. 
  Currently, it does all the work, but as we progress, it'll delegate most work to other components.

  It is a very simple component, taking no parameters, and returning something suspiciously similar to HTML. This is JSX.
*/

/**
 imported css and svg  (E.g "./logo.svg"; and import "./App.css") is not standard JS or TS. 
 Such imports are handled at compile time by Webpack, which is built into CRA.

 Importing an image results in a string, which can be used as the image's final URL. 
 You can see it being used as the src attribute for an <img> tag.

 Importing a CSS file means whatever styles are in it will be globally available.
*/
