import React from 'react';
import Styled from 'styled-components';

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
      <h1 className='title'>{props.title}</h1>
      <Nav />
    </Header>
  )
}

export default PageWrapper;