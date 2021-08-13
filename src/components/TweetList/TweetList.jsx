import styled from "styled-components";
import { device } from "../../styles/media-queries";
import TweetItem from "../TweetItem/TweetItem";

const TweetListSection = styled.section`
  //   border: 1px solid red;
  margin: 10px 0;
  @media ${device.desktop} {
    grid-area: tweetlist;
  }
`;

export default function TweetList({ tweets }) {
  return (
    <TweetListSection>
      {tweets.length > 0
        ? tweets.map((tweet) => <TweetItem key={tweet.id} tweet={tweet} />)
        : "None"}
    </TweetListSection>
  );
}

/**
 * list tweets
  - tweets, setTweets = useState([])
    - test: if empty, expect 'none'
    - test: if tweets.length > 0, expect node.length === tweets.length
 */
