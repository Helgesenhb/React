import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
/**
  This is the application's entry point, similar to the public static void main() method in Java. 
  Note that this is specific to CRA, and not general to JavaScript.

  Its job is to mount the React application into the DOM. 
  It inspects the (parsed) HTML, gets the element with ID root, and mounts the application into it.

  You rarely have to touch this file.

  Note that this is the only source file CRA enforces the existence of, or even cares about. 
  How to structure the rest of the files is up to the developer.
 */
