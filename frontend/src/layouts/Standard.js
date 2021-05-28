import React from "react";
import Styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageStyle = Styled.div`
  display: flex;
  flex-direction: column;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  } 
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