import "./App.css";
import styled from "styled-components";
import HashtagContainer from "./components/HashtagContainer/HashtagContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";
import TweetItem from "./components/TweetItem/TweetItem";

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0px 0 15px;
`;
function App() {
  const [tweets, setTweets] = useState([
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
  ]);
  return (
    <div className="App">
      <Title>Tweet Feed</Title>
      <SearchBar />
      <HashtagContainer
        hashtags={[
          "cats",
          "dogs",
          "birds",
          "horses",
          "mice",
          "alligators",
          "rats",
          "lizards",
        ]}
      />
      <div>
        {tweets.length > 0
          ? tweets.map((tweet) => <TweetItem key={tweet.id} tweet={tweet} />)
          : "None"}
      </div>
      TweetList
    </div>
  );
}

export default App;
