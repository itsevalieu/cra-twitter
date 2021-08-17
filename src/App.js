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
    grid-template-columns: 3fr 1.5fr;
    grid-template-areas:
      "title title"
      "searchbar sidebar"
      "tweetlist sidebar"
      "tweetlist sidebar";
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
  const [tweets, setTweets] = useState([]);
  const [filteredTweets, setFilteredTweets] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loadMoreQuery, setLoadMoreQuery] = useState("");
  const [hashtagFilters, setHashtagFilters] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
      setTweets([]);
      setHashtagFilters([]);
      setFilteredTweets([]);
      return;
    } else {
      let searchQuery = `/tweets?q=${keyword}&result_type=popular&count=5`;
      try {
        axios.get(searchQuery).then(async (res) => {
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
        url: `https://twitter.com/twitter/status/${dirtyTweet.id_str}`,
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
          let nextResultsQuery = res.data.search_metadata.next_results;
          let newTweets = await cleanTweets(res.data.statuses);
          setLoadMoreQuery(nextResultsQuery);
          setTweets([...tweets, ...newTweets]);
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const filterTweetsByHashtag = async (hashtag) => {
    console.log("Clicked pill with #", hashtag);
    let currentHashtagFilterList = [...hashtagFilters];

    console.log(
      `Is the hashtag(${hashtag}) included in currentHashtagFilterList: ${currentHashtagFilterList}`
    );
    if (currentHashtagFilterList.includes(hashtag)) {
      currentHashtagFilterList.splice(
        currentHashtagFilterList.indexOf(hashtag),
        1
      );
      let setTheseHashtags = [...currentHashtagFilterList];
      setHashtagFilters(setTheseHashtags);
    } else {
      let setTheseHashtags = [...hashtagFilters, hashtag];
      setHashtagFilters(setTheseHashtags);
    }
  };

  useEffect(() => {
    console.log("Current hashtagFilters", hashtagFilters);
    let currentTweets = tweets;
    console.log("Current tweets", currentTweets);
    if (hashtagFilters.length) {
      let newfilteredTweets = [];
      hashtagFilters.forEach((hTag) => {
        if (newfilteredTweets.length) {
          newfilteredTweets = newfilteredTweets.filter((tweet) => {
            let tweetHashtags = tweet.hashtags
              .join(" ")
              .toLowerCase()
              .split(" ");
            return tweetHashtags.includes(hTag.toLowerCase());
          });
        } else {
          newfilteredTweets = currentTweets.filter((tweet) => {
            let tweetHashtags = tweet.hashtags
              .join(" ")
              .toLowerCase()
              .split(" ");
            return tweetHashtags.includes(hTag.toLowerCase());
          });
        }
      });
      console.log("Filtered Tweets", newfilteredTweets);
      setFilteredTweets(newfilteredTweets);
    } else {
      setFilteredTweets(tweets);
    }
  }, [hashtagFilters]);

  return (
    <AppContainer>
      <Title>Tweet Feed</Title>
      <SearchBar
        handleChange={debounce(handleChange, 300)}
        handleSubmit={handleSubmit}
      />
      <HashtagContainer
        tweets={tweets}
        keyword={keyword}
        filterTweetsByHashtag={filterTweetsByHashtag}
      />
      <TweetList
        tweets={hashtagFilters.length ? filteredTweets : tweets}
        filterTweetsByHashtag={filterTweetsByHashtag}
        loadMoreQuery={loadMoreQuery}
        loadMoreTweets={loadMoreTweets}
      />
    </AppContainer>
  );
}

export default App;
