import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const NavElement = Styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-top: 30px;
  width: 100%;
`

function Nav() {
  return (
    <NavElement>
      <div>
        <button>Create Category</button>
        <button>Create Item</button>
      </div>
      <div>
      <Link to="/categories">
        <button>All Categories</button>   
      </Link>
      <Link to="/allitems">
        <button>All Items</button>
      </Link>
      </div>
    </NavElement>
  )
}

export default Nav;