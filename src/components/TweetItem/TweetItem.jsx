import styled from "styled-components";
import Pill from "../Pill/Pill";

const Tweet = styled.section`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 1px #efefef;
  display: flex;
  padding: 15px 10px;
  div {
    display: flex;
    flex-flow: row wrap;
  }
  a {
    color: #4282b9;
    text-decoration: none;
  }
  p {
    margin: 0 0 10px;
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
const Handle = styled.p`
  font-weight: 500;
`;
export default function TweetItem({ tweet }) {
  console.log("TWEET", tweet);
  return (
    <Tweet>
      <Avatar>
        <img src="" alt={tweet.avatar} />
      </Avatar>
      <div>
        <div>
          <Handle>@{tweet.username}</Handle>
          <p>
            {tweet.text} {"  "}
            <a href={tweet.url} target="_blank" rel="noreferrer">
              {tweet.url}
            </a>
          </p>
        </div>
        <div>
          {tweet.hashtags.length > 0
            ? tweet.hashtags.map((hashtag) => (
                <Pill key={hashtag} text={hashtag} />
              ))
            : "None"}
        </div>
      </div>
    </Tweet>
  );
}
