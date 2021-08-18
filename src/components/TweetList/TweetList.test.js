import { render, screen } from "@testing-library/react";
import TweetList from "./TweetList";

test("renders none if no hashtags", () => {
  const tweets = [];
  render(<TweetList tweets={tweets} />);
  const tweetListElement = screen.getByText(/None/i);
  expect(tweetListElement).toBeInTheDocument();
});

test("renders same num of tweets if tweets exists", () => {
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

test("renders load more button if loadMoreQuery and tweets exists", () => {
  const loadMoreQuery = "query string with max_id";
  const tweets = [
    {
      id: 1,
      avatar: "www.google.com",
      username: "itsevalieu",
      text: "Hey dude this is a test tweet",
      url: "www.twitter.com",
      hashtags: ["cats", "dogs", "birds"],
    },
  ];
  render(<TweetList tweets={tweets} loadMoreQuery={loadMoreQuery} />);
  const loadMoreButtonElement = screen.getByText(/Load More/i);
  expect(loadMoreButtonElement).toBeInTheDocument();
});

test("renders no more tweets to load button if tweets exists, but loadMoreQuery doesn't exist", () => {
  const loadMoreQuery = "";
  const tweets = [
    {
      id: 1,
      avatar: "www.google.com",
      username: "itsevalieu",
      text: "Hey dude this is a test tweet",
      url: "www.twitter.com",
      hashtags: ["cats", "dogs", "birds"],
    },
  ];
  render(<TweetList tweets={tweets} loadMoreQuery={loadMoreQuery} />);
  const loadMoreButtonElement = screen.getByText(/No More Tweets to Load/i);
  expect(loadMoreButtonElement).toBeInTheDocument();
});
