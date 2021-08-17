import styled from "styled-components";
import Pill from "../Pill/Pill";

const Tweet = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 2px 3px 2px #efefef;
  display: flex;
  flex-flow: row nowrap;
  padding: 15px 10px;

  &:nth-child(even) {
    background-color: #f8f9f9;
  }
`;
const Avatar = styled.div`
  margin-right: 15px;
  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
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
export default function TweetItem({ tweet, filterTweetsByHashtag }) {
  // console.log("Tweet", tweet);
  return (
    <Tweet data-testid="tweet">
      <Avatar>
        <img src={tweet.avatar} alt={tweet.avatar} />
      </Avatar>
      <div>
        <Content>
          <Handle>@{tweet.username}</Handle>
          <p>
            {tweet.text} {"  "}
            <a href={tweet.url} target="_blank" rel="noreferrer">
              {`https://t.co/${tweet.id}`}
            </a>
          </p>
        </Content>
        <Hashtags>
          {tweet.hashtags.length
            ? tweet.hashtags.map((hashtag, key) => (
                <Pill
                  key={hashtag + key}
                  text={hashtag}
                  filterTweetsByHashtag={filterTweetsByHashtag}
                />
              ))
            : null}
        </Hashtags>
      </div>
    </Tweet>
  );
}
