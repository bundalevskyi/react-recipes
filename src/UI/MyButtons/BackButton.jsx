import React from "react";
import { useNavigate } from "react-router-dom";
import LeftArrowSvg from "../../img/svgComponents/LeftArrowSvg";
import styled from "styled-components";

export const StyledButton = styled.button`
  .back__button-inner {
    display: flex;
    padding: 20px;
    padding-right: 50px;
    margin-top: 30px;
  }
  display: flex;
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  font-weight: 700;
  background-color: transparent;
  color: #55504f;
  cursor: pointer;


  &:hover {
    box-shadow: -10px 0 30px rgba(117, 117, 117, 0.15);
    border-radius: 20px 0 0 20px;
    .back__button-inner > span::before,
    .back__button-inner > span::after {
      transform: scaleX(1);
    }
  }

  .back__button-inner > span {
    margin-bottom: 15px;
    position: relative;
  }

  .back__button-inner > span::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 4px;
    background-color: #ffbb17;
    transform: scaleX(0);
    transform-origin: bottom;
    transition: transform 0.3s ease;
  }

  .back__button-inner > span::after {
    top: 0;
  }
`;

const BackButton = () => {
  const history = useNavigate();

  return (
    <StyledButton onClick={() => history(-1)}>
      <div className="back__button-inner">
        <LeftArrowSvg />
        <span>Back</span>{" "}
      </div>
    </StyledButton>
  );
};

export default BackButton;
