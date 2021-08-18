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

export default function HashtagContainer({ hashtags, filterHashtags }) {
  return (
    <Sidebar>
      <Section>
        <Title>Filter by hashtag</Title>
        <div>
          {hashtags.length
            ? hashtags.map((hashtag, key) => (
                <Pill
                  key={hashtag + key}
                  text={hashtag}
                  filterHashtags={filterHashtags}
                />
              ))
            : "None"}
        </div>
      </Section>
    </Sidebar>
  );
}
