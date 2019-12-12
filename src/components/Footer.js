import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 2em;
  text-align: center;
  p {
    margin: 0;
    font-size: 1.5em;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Crafted with 🥪 by{" "}
        <a href="https://leander.xyz" target="_blank" rel="noopener noreferrer">
          Leander
        </a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
