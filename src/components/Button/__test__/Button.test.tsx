import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  test("Button element should be rendered", () => {
    render(<Button shape="circle" variant="success" />);
    const buttonElm = screen.getByRole("button");
    expect(buttonElm).toBeInTheDocument();
  });

  test("Button element should be have shape and variant props", () => {
    render(<Button shape="circle" variant="success" />);
    const buttonElm = screen.getByRole("button");
    expect(buttonElm).toHaveClass("circle", "btn-success");
  });

  test("Button element should have Export All text", () => {
    render(<Button variant="success">Export All</Button>);
    const buttonElm = screen.getByRole("button");
    expect(buttonElm).toHaveTextContent("Export All");
  });
});

