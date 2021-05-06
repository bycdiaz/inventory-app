import React from "react";
import Styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageStyle = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .content {
    flex: 1 0 auto;
  }

  .footer {
    flex-shrink: 0;
  }
`

function PageWrapper(props) {
  return (
    <PageStyle>
      <div className='content'>
        <Header title={props.title}/>
        {props.children}
        <Footer className='footer' />
      </div>
    </PageStyle>
  )
}

export default PageWrapper;