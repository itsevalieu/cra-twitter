import styled from "styled-components";

const Text = styled.span`
  background-color: #e7f3fa;
  border-radius: 50px;
  color: #4282b9;
  font-size: 1rem;
  margin: 0 10px 10px 0;
  padding: 5px 10px;
  text-align: center;
  &:hover {
    background: #ccc;
    cursor: pointer;
  }
`;
export default function Pill({ text, filterHashtags }) {
  return <Text onClick={() => filterHashtags(text)}>#{text}</Text>;
}
