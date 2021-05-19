import React from 'react';
import Styled from 'styled-components';
import { Link } from "react-router-dom";

import Nav from './Nav';

const Header = Styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-weight: bold;
    font-size: 24pt;
  }

  padding: 25px;
  background-color: #ebc340;
`

function PageWrapper(props) {
  return (
    <Header>
      <Link to='/'>
        <h1 className='title'>{props.title}</h1>
      </Link>
      <Nav />
    </Header>
  )
}

export default PageWrapper;