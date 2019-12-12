import React from "react";
import styled from "styled-components";

const StepButtonWrapper = styled.button`
  padding: 1em 2em;
  font-size: 1.75em;
  background: #fcdc25;
  color: #292929;
  transform: skew(-7deg);
  margin: 1em;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.2;
  }
  p {
    margin: 0;
    font-weight: bold;
    letter-spacing: 1px;
    transform: skew(7deg);
  }
`;

const StepButton = ({ children, disabled }) => {
  return (
    <StepButtonWrapper disabled={disabled}>
      <p>{children}</p>
    </StepButtonWrapper>
  );
};

export default StepButton;
