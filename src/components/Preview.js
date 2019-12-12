import React from "react";
import styled from "styled-components";

import BreadWhiteImage from "../assets/bread-white.png";
import ButteredBreadImage from "../assets/bread-buttered.png";
import CheeseCheddarImage from "../assets/cheese-cheddar.png";
import GrilledCheeseImage from "../assets/grilled-cheese.png";
import CrumbsImage from "../assets/crumbs.png";

const PreviewWrapper = styled.div`
  position: relative;
  margin-top: 2rem;
  min-height: 300px;
  img {
    max-width: 400px;
    max-height: 400px;
  }
  .sandwich-assembly {
    display: ${({ isGrilled }) => (isGrilled ? "none" : "inline-block")};
    position: relative;
  }
  .onTop {
    position: absolute;
    left: 0;
  }
  .bread-top {
    top: -50px;
  }
  .grilled-boye {
    display: ${({ isGrilled, isChomped }) =>
      !isGrilled || isChomped ? "none" : "inline-block"};
  }
  .all-gone {
    display: ${({ isChomped }) => (!isChomped ? "none" : "inline-block")};
  }
`;

const Preview = ({
  isCheese,
  isButtered,
  isAssembled,
  isGrilled,
  isChomped
}) => {
  return (
    <PreviewWrapper isGrilled={isGrilled} isChomped={isChomped}>
      <div className="sandwich-assembly">
        <img
          src={isButtered ? ButteredBreadImage : BreadWhiteImage}
          alt={isButtered ? "Buttered bread" : "Heathenistic plain bread"}
          title={isButtered ? "Buttered bread" : "Heathenistic plain bread"}
        />
        {isCheese && (
          <img
            className="cheese onTop"
            src={CheeseCheddarImage}
            alt="Cheddar Cheese"
            title="Cheddar Cheese"
          />
        )}
        {isAssembled && (
          <img
            className="bread-top onTop"
            src={ButteredBreadImage}
            alt="A wonderous creation"
            title="A wonderous creation"
          />
        )}
      </div>
      {!isAssembled && (
        <img
          src={isButtered ? ButteredBreadImage : BreadWhiteImage}
          alt={isButtered ? "Buttered bread" : "Heathenistic plain bread"}
          title={isButtered ? "Buttered bread" : "Heathenistic plain bread"}
        />
      )}
      <img
        className="grilled-boye"
        src={GrilledCheeseImage}
        alt="A beautiful grilled cheese"
        title="A beautiful grilled cheese"
      />
      <img
        className="all-gone"
        src={CrumbsImage}
        alt="If only we had more time together"
        title="If only we had more time together"
      />
    </PreviewWrapper>
  );
};

export default Preview;
