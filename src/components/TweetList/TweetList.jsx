import styled from "styled-components";
import { device } from "../../styles/media-queries";
import TweetItem from "../TweetItem/TweetItem";

const TweetListSection = styled.section`
  //   border: 1px solid red;
  margin: 10px 0 0 0;
  // text-align: center;
  @media ${device.desktop} {
    grid-area: tweetlist;
  }
`;

export default function TweetList({ tweets }) {
  return (
    <TweetListSection>
      {tweets.length ? (
        tweets.map((tweet) => <TweetItem key={tweet.id} tweet={tweet} />)
      ) : (
        <div>None</div>
      )}
    </TweetListSection>
  );
}

/**
 * list tweets
  - tweets, setTweets = useState([])
    - test: if empty, expect 'none'
    - test: if tweets.length > 0, expect node.length === tweets.length
 */
