import { render, screen } from "@testing-library/react";
import TweetItem from "./TweetItem";

test("renders tweet", () => {
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
  const urlElement = screen.getByText(`${tweet.url}`);
  expect(urlElement).toBeInTheDocument();
});

/**
 * - tweet, passed as props
    - test: has avatar, username, text, url, and hashtags(if any)
 */