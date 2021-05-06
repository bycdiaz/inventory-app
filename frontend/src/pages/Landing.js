import React from "react";
import Styled from "styled-components";

import StandardLayout from "../layouts/Standard";

const LandingContent = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function Landing() {
  return (
    <StandardLayout title={"Inventory App"}>
      <LandingContent>
        <h1>Landing Content</h1>
      </LandingContent>
    </StandardLayout>
  )
}

export default Landing;