import styled from "styled-components";
import { device } from "../../styles/media-queries";
import TweetItem from "../TweetItem/TweetItem";

const TweetListSection = styled.section`
  margin-top: 25px;
  @media ${device.desktop} {
    margin: 0 0;
    grid-area: tweetlist;
  }
  .div {
    text-align: center;
  }
`;
const LoadButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 3px 2px #efefef;
  color: #4282b9;
  font-size: 1rem;
  padding: 25px;
  width: 100%;
`;
export default function TweetList({
  tweets,
  loadMoreQuery,
  loadMoreTweets,
  filterHashtags,
}) {
  return (
    <TweetListSection>
      {tweets.length ? (
        tweets.map((tweet) => (
          <TweetItem
            key={tweet.id}
            tweet={tweet}
            filterHashtags={filterHashtags}
          />
        ))
      ) : (
        <div>None</div>
      )}
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
    </TweetListSection>
  );
}
