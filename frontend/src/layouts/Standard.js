import React from "react";
import Styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageStyle = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* .header {
    flex-grow: 1
  }

  .content {
    flex-grow: 2
  }

  .footer {
    flex-grow: 1
  } */
`

function PageWrapper(props) {
  return (
    <PageStyle>
      <Header className='header' title={props.title}/>
      <div className='content'>
        {props.children}
      </div>
      <Footer className='footer' />
    </PageStyle>
  )
}

export default PageWrapper;