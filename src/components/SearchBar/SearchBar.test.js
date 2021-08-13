import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("renders SearchBar", () => {
  render(<SearchBar />);
  const searchBarElement = screen.getByPlaceholderText(/Search by keyword/i);
  expect(searchBarElement).toBeInTheDocument();
});
