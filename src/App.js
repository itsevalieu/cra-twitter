import "./App.css";
import styled from "styled-components";
import HashtagContainer from "./components/HashtagContainer/HashtagContainer";
import SearchBar from "./components/SearchBar/SearchBar";

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0px 0 15px;
`;
function App() {
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
      TweetList TweetItems
    </div>
  );
}

export default App;
