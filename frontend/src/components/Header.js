import React from "react";
import Styled from "styled-components";

const Header = Styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: bold;
  font-size: 24pt;

  padding: 25px;
  background-color: #ebc340;
`

function PageWrapper(props) {
  return (
    <Header>
      <h1>{props.title}</h1>
    </Header>
  )
}

export default PageWrapper;