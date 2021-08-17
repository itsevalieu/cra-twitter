import { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../../styles/media-queries";
import Pill from "../Pill/Pill";

const Sidebar = styled.div`
  @media ${device.desktop} {
    grid-area: sidebar;
  }
`;
const Section = styled.section`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 2px #efefef;
  padding: 15px 10px;

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

export default function HashtagContainer({
  tweets,
  keyword,
  filterTweetsByHashtag,
}) {
  const [filterableHashtags, setFilterableHashtags] = useState([]);
  useEffect(() => {
    // console.log("Do we got tweets?", tweets);
    setFilterableHashtags([]);
    if (tweets && keyword) {
      let newHashtags = [];
      for (let tweet of tweets) {
        newHashtags.push(...tweet.hashtags);
      }
      setFilterableHashtags([
        ...new Set([...filterableHashtags, ...newHashtags]),
      ]);
    }
    return () => {
      console.log("Cleanup for hashtags");
      setFilterableHashtags([]);
    };
  }, [tweets, keyword]);
  return (
    <Sidebar>
      <Section>
        <Title>Filter by hashtag</Title>
        <div>
          {filterableHashtags.length
            ? filterableHashtags.map((hashtag, key) => (
                <Pill
                  key={hashtag + key}
                  text={hashtag}
                  filterTweetsByHashtag={filterTweetsByHashtag}
                />
              ))
            : "None"}
        </div>
      </Section>
    </Sidebar>
  );
}
