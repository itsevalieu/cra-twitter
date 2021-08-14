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
  }
`;

export default function SearchBar({ handleChange }) {
  return (
    <Form>
      <input
        type="text"
        placeholder="Search by keyword"
        id="searchbar"
        autoFocus
        onChange={handleChange}
      />
    </Form>
  );
}

/**
 * search bar, keyword lookup (api)
  - needs search icon
  - keyword, setKeyword = useState('')
  - debounce(handleKeypress, 3000) (how many seconds?)
  - handleKeypress(keyword)
  - userEffect(()=> { handleKeypress(keyword) }, keyword)
 */
