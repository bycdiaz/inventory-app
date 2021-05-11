import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

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
        <Link to="/categories">
          <button>All Categories</button>   
        </Link>
        <Link to="/items">
          <button>All Items</button>
        </Link>
      </LandingContent>
    </StandardLayout>
  )
}

export default Landing;