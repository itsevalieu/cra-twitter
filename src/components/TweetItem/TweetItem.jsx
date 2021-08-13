import styled from "styled-components";
import Pill from "../Pill/Pill";

const Tweet = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 1px #efefef;
  border: 1px solid blue;
  display: flex;
  flex-flow: row nowrap;
  padding: 15px 10px;
  &:nth-child(even) {
    background-color: #f8f9f9;
  }
`;
const Avatar = styled.div`
  border: 1px solid red;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-right: 15px;
  img {
    height: 50px;
    width: 50px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-flow: column wrap;
  a {
    color: #4282b9;
    text-decoration: none;
  }
  p {
    margin: 0 0 10px;
  }
`;
const Handle = styled.p`
  font-weight: 500;
`;
const Hashtags = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
export default function TweetItem({ tweet }) {
  console.log("TWEET", tweet);
  return (
    <Tweet data-testid="tweet">
      <Avatar>
        <img src="" alt={tweet.avatar} />
      </Avatar>
      <div>
        <Content>
          <Handle>@{tweet.username}</Handle>
          <p>
            {tweet.text} {"  "}
            <a href={tweet.url} target="_blank" rel="noreferrer">
              {tweet.url}
            </a>
          </p>
        </Content>
        <Hashtags>
          {tweet.hashtags.length > 0
            ? tweet.hashtags.map((hashtag) => (
                <Pill key={hashtag} text={hashtag} />
              ))
            : "None"}
        </Hashtags>
      </div>
    </Tweet>
  );
}
