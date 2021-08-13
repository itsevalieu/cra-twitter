import styled from "styled-components";
import { device } from "./styles/media-queries";
import { useState } from "react";
import HashtagContainer from "./components/HashtagContainer/HashtagContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import TweetList from "./components/TweetList/TweetList";

const AppContainer = styled.div`
  background-color: #f8f9f9;
  padding: 30px 0;
  min-height: 100vh;
  @media ${device.desktop} {
    display: grid;
    grid-template-rows: 0fr 0fr auto auto;
    grid-template-columns: 3fr 1fr;
    grid-template-areas:
      "title title"
      "searchbar sidebar"
      "tweetlist sidebar"
      "tweetlist .";
    grid-gap: 25px;
    margin-left: 0px;
    padding: 30px 20%;
  }
`;
const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0 15px;
  @media ${device.desktop} {
    grid-area: title;
    margin-left: 0px;
  }
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
    <AppContainer>
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
      <TweetList tweets={tweets} />
    </AppContainer>
  );
}

export default App;
