import { render, screen } from "@testing-library/react";
import TweetItem from "./TweetItem";

test("renders tweet with attributes", () => {
  const tweet = {
    id: 1,
    avatar: "www.google.com",
    username: "evacotive",
    text: "Oh man oh man, this is such an exciting tweet, in fact it's so exciting that I'm gonna repeat what I just said to make this tweet longer. Oh man oh man, this is such an exciting tweet, in fact it's so exciting that I'm gonna repeat what I just said to make this tweet longer.",
    url: "www.twitter.com",
    hashtags: ["rats", "lizards"],
  };
  render(<TweetItem tweet={tweet} />);
  const avatarElement = screen.getByAltText(`${tweet.avatar}`);
  expect(avatarElement).toBeInTheDocument();
  const usernameElement = screen.getByText(`@${tweet.username}`);
  expect(usernameElement).toBeInTheDocument();
  const textElement = screen.getByText(`${tweet.text}`);
  expect(textElement).toBeInTheDocument();
  const urlElement = screen.getByText(`https://t.co/${tweet.id}`);
  expect(urlElement).toBeInTheDocument();
  const hashTagElements = screen.getAllByText(/#/i);
  expect(hashTagElements.length).toEqual(tweet.hashtags.length);
});
