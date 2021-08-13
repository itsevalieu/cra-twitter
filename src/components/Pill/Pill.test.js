import { render, screen } from "@testing-library/react";
import Pill from "./Pill";

test("renders pill", () => {
  render(<Pill text="cats" />);
  const pillElement = screen.getByText(/cats/i);
  expect(pillElement).toBeInTheDocument();
});
