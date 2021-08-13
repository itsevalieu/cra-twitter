import styled from "styled-components";
import { device } from "../../styles/media-queries";
import Pill from "../Pill/Pill";

const Section = styled.section`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 1px #efefef;
  padding: 15px 10px;
  @media ${device.desktop} {
    grid-area: sidebar;
    min-width: 0;
    min-height: 0;
  }
  div {
    display: flex;
    flex-flow: row wrap;
  }
`;
const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0px 0 15px;
`;

export default function HashtagContainer({ hashtags }) {
  return (
    <Section>
      <Title>Filter by hashtag</Title>
      <div>
        {hashtags.length > 0
          ? hashtags.map((hashtag) => <Pill key={hashtag} text={hashtag} />)
          : "None"}
      </div>
    </Section>
  );
}

/**
 * hashtag containers, filter tweets (set, unset)
  - hashtags, setHashtags = useState([])
    X test: if empty, expect text 'None'
    X test: if hashtags.length > 0, expect node.length === tweets.length
  - onClick, setHashTags(hashtag_id) => toggles hashtag list, if exists, remove, if doesn't exist, add, then filterTweets(hashtags)
    - test: hashtag that is set has classname to show
  - filterTweets(hashtags: string[]) => filters tweets
    - test: tweet with hashtag exists
 */
