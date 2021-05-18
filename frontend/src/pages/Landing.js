import React from "react";
import Styled from "styled-components";

const LandingContent = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  font-size: 20pt;
`

function Landing() {
  return (
    <LandingContent>
      Choose an action above.
    </LandingContent>
  )
}

export default Landing;