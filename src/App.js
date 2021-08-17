import styled from "styled-components";
import { device } from "./styles/media-queries";
import { useEffect, useState } from "react";
import HashtagContainer from "./components/HashtagContainer/HashtagContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import TweetList from "./components/TweetList/TweetList";
import axios from "axios";
import debounce from "lodash.debounce";

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
const LoadButton = styled.button`
  width: 100%;
  background-color: #ffffff;
  padding: 25px;
  border: none;
  font-size: 1rem;
  color: #4282b9;
`;
function App() {
  const [tweets, setTweets] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loadMoreQuery, setLoadMoreQuery] = useState("");

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.value);
    debouncedFn(e);
  };

  const debouncedFn = debounce((e) => {
    let keyword = e.target.value;
    setKeyword(keyword);
  }, 300);

  const searchKeyword = async (keyword) => {
    if (!keyword.length) {
      console.log("No keyword set yet.");
      return;
    } else {
      console.log("Running search.");
      let searchQuery = `/tweets?q=${keyword}&result_type=popular&count=5`;
      try {
        axios.get(searchQuery).then(async (res) => {
          console.log("res", res);
          let nextResultsQuery = res.data.search_metadata.next_results;
          let newTweets = await cleanTweets(res.data.statuses);

          setLoadMoreQuery(nextResultsQuery);
          setTweets([...newTweets]);
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    console.log("useEffect", keyword);
    searchKeyword(keyword);
    // return () => {
    //   console.log("Cleanup");
    //   setKeyword("");
    //   setTweets([]);
    //   setLoadMoreQuery("");
    // };
  }, [keyword]);

  const cleanTweets = (dirtyTweets) => {
    console.log("Cleaning tweets from dirtyTweets", dirtyTweets);
    return dirtyTweets.map((dirtyTweet) => {
      let hashtagList = dirtyTweet.entities.hashtags.length
        ? dirtyTweet.entities.hashtags.map((hashtag) => hashtag.text.trim())
        : [];
      // console.log("hashtagList", hashtagList);
      return {
        id: dirtyTweet.id_str,
        avatar: dirtyTweet.user.profile_image_url_https,
        username: dirtyTweet.user.screen_name,
        text: dirtyTweet.full_text
          ? dirtyTweet.full_text.slice(
              0,
              dirtyTweet.full_text.indexOf("https://t.co/")
            )
          : "",
        url: dirtyTweet.entities.urls.length
          ? dirtyTweet.entities.urls[0].url
          : null,
        hashtags: hashtagList,
      };
    });
  };
  const loadMoreTweets = (loadMoreQuery) => {
    if (!loadMoreQuery) {
      console.log("No loadMoreQuery set.");
      return;
    } else {
      console.log("Getting more tweets.");
      let searchQuery = `/tweets${loadMoreQuery}`;
      try {
        axios.get(searchQuery).then(async (res) => {
          console.log("res load more", res);
          let nextResultsQuery = res.data.search_metadata.next_results;
          let newTweets = await cleanTweets(res.data.statuses);
          setLoadMoreQuery(nextResultsQuery);
          console.log("Tweets", tweets);

          setTweets([...tweets, ...newTweets]);
          console.log("New tweets after load", newTweets);
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  const filterTweetsByHashtag = async (hashtag) => {
    console.log("Clicked pill with #", hashtag);
    let filteredTweets = await tweets.filter((tweet) => {
      return tweet.hashtags.includes(hashtag);
    });
    console.log("Filtered Tweets", filteredTweets);
    setTweets(filteredTweets);
  };
  return (
    <AppContainer>
      <Title>Tweet Feed</Title>
      <SearchBar handleChange={debounce(handleChange, 300)} />
      <HashtagContainer
        tweets={tweets}
        keyword={keyword}
        filterTweetsByHashtag={filterTweetsByHashtag}
      />
      <TweetList tweets={tweets} />
      {loadMoreQuery && tweets.length ? (
        <LoadButton onClick={() => loadMoreTweets(loadMoreQuery)}>
          Load More
        </LoadButton>
      ) : null}
      {!loadMoreQuery && tweets.length ? (
        <LoadButton disable onClick={() => loadMoreTweets(loadMoreQuery)}>
          No More Tweets to Load
        </LoadButton>
      ) : null}
    </AppContainer>
  );
}

export default App;
