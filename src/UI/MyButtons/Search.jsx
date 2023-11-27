import React from "react";
import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 220px;
  margin: 0 auto;
  position: relative;

  .search__input {
    width: 220px;
    padding: 6px 30px 6px 15px;
    background-color: #fbf2df;
    font-size: 15px;
    font-family: "Poppins", sans-serif;
    border-style: solid;
    border-width: 3px 3px 3px;
    box-shadow: 2px 2px 0 0 #cd4b5c;
    border-color: #cd4b5c;
    outline: #ffbb17;
    transition: box-shadow 0.3s, border-color 0.3s;
    z-index: 0;

    &:focus {
      outline: none;
      box-shadow: 2px 2px 0 0 #ffbb17;
      border-color: #ffbb17;
    }
  }

  .closeSvg {
    position: absolute;
    fill: #cd4b5c;
    right: 10px;
    top: 10px;
    cursor: pointer;
    z-index: 1;

    &:hover {
      fill: #ffbb17;
    }
  }
`;

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <StyledForm>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className="search__input"
        placeholder="Search recipe..."
      />

      { searchValue && (<svg
        onClick={() => setSearchValue('')}
        className="closeSvg"
        width="16px"
        height="18px"
        viewBox="0 -0.5 21 21">
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-419.000000, -240.000000)">
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <polygon points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"></polygon>
          </g>
        </g>
      </svg>)}
    </StyledForm>
  );
};

export default Search;
