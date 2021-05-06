import React from "react";
import Styled from "styled-components";

const FooterContent = Styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  font-weight: bold;

  margin-top: 1rem;
  padding: 1rem;
  background-color: #ebc340;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`

function Footer() {
  return (
    <FooterContent>
      <p>email@us.com</p>
      <p>(555) 555 - 5555</p>
    </FooterContent>
  )
}

export default Footer;
