import { render, screen } from "@testing-library/react";
import HashtagContainer from "./HashtagContainer";

test("renders none if no hashtags", () => {
  const hashtags = [];
  render(<HashtagContainer hashtags={hashtags} />);
  const hashTagContainerElement = screen.getByText(/None/i);
  expect(hashTagContainerElement).toBeInTheDocument();
});

test("renders same num of hashtags if hashtags exists", () => {
  const hashtags = ["cats", "dogs", "birds", "horses"];
  render(<HashtagContainer hashtags={hashtags} />);
  const hashTagContainerElement = screen.getAllByText(/#/i);
  expect(hashTagContainerElement.length).toEqual(hashtags.length);
});
