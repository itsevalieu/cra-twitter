import styled from "styled-components";

const Text = styled.span`
  background-color: #e7f3fa;
  border-radius: 50px;
  color: #4282b9;
  font-size: 1rem;
  padding: 5px 10px;
  text-align: center;
  &:before {
    content: "#";
  }
`;
export default function Pill({ text }) {
  return <Text>{text}</Text>;
}
