import React from "react";
import styled from "styled-components";

import Preview from "./Preview";
import StepButton from "./StepButton";

const AssemblyFloorWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const AssemblyFloor = () => {
  return (
    <AssemblyFloorWrapper>
      <Preview />
      <StepButton>Step1: Butter</StepButton>
      <StepButton>Step2: Cheese</StepButton>
      <StepButton>Step3: Sandwich</StepButton>
    </AssemblyFloorWrapper>
  );
};

export default AssemblyFloor;
