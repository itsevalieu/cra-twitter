import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Tweet Feed title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Tweet Feed/i);
  expect(titleElement).toBeInTheDocument();
});
