import React from "react";
import { render, screen } from "@testing-library/react";
import Item from "./Item";

test("Should render Item component", () => {
	render(<Item item="Crap" amount={999} unit="curicks" />);
});
