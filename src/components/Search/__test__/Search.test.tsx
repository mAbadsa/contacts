import { render, screen } from "@testing-library/react";
import Search from "../Search";
// import {fn} from "jest";

describe("Search", () => {
  test("Search component should have input element with placeholder", () => {
    render(<Search search={() => {}} />);
    const buttonElm = screen.getByPlaceholderText("Search contacts");
    expect(buttonElm).toBeInTheDocument();
  });
});

