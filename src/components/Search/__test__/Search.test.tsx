import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../Search";

const searchFnMock = jest.fn();

describe("Search", () => {
  test("Search component should have input element with placeholder", () => {
    render(<Search search={searchFnMock} />);
    const inputElm = screen.getByPlaceholderText("Search contacts");
    expect(inputElm).toBeInTheDocument();
  });

  test("Search function", () => {
    render(<Search search={searchFnMock} />);
    const inputElm: HTMLInputElement =
      screen.getByPlaceholderText("Search contacts");
    fireEvent.change(inputElm, { target: { value: "Muhammad" } });
    expect(inputElm.value).toBe("Muhammad");
  });
});

