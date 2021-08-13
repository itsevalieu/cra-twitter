import { render, screen } from "@testing-library/react";
import TweetList from "./TweetList";

test("renders none if no hashtags", () => {
  const tweets = [];
  render(<TweetList tweets={tweets} />);
  const tweetListElement = screen.getByText(/None/i);
  expect(tweetListElement).toBeInTheDocument();
});

test("renders same num of hashtags if hashtags exists", () => {
  const tweets = [
    {
      id: 1,
      avatar: "www.google.com",
      username: "itsevalieu",
      text: "Hey dude this is a test tweet",
      url: "www.twitter.com",
      hashtags: ["cats", "dogs", "birds"],
    },
    {
      id: 2,
      avatar: "www.google.com",
      username: "evalieuraices",
      text: "Hey check it out this is a different tweet wowowow",
      url: "www.twitter.com",
      hashtags: ["horses", "mice", "alligators", "rats", "lizards"],
    },
    {
      id: 3,
      avatar: "www.google.com",
      username: "evacotive",
      text: "Oh man oh man, this is such an exciting tweet, in fact it's so exciting that I'm gonna repeat what I just said to make this tweet longer. Oh man oh man, this is such an exciting tweet, in fact it's so exciting that I'm gonna repeat what I just said to make this tweet longer.",
      url: "www.twitter.com",
      hashtags: ["rats", "lizards"],
    },
  ];
  render(<TweetList tweets={tweets} />);
  const tweetListElement = screen.getAllByTestId(/tweet/i);
  expect(tweetListElement.length).toEqual(tweets.length);
});
