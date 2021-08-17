import styled from "styled-components";
import { device } from "../../styles/media-queries";

const Form = styled.form`
  padding: 25px 15px;
  width: 100%;
  @media ${device.desktop} {
    grid-area: searchbar;
    padding: 0px;
  }
  input {
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 15px;
    width: 100%;
    font-family: FontAwesome, sans-serif;
  }
`;

export default function SearchBar({ handleChange, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="&#xF002;   Search by keyword"
        id="searchbar"
        autoFocus
        onChange={handleChange}
      />
    </Form>
  );
}
