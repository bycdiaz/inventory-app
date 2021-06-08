import React from "react";
import { useLocation } from 'react-router-dom';
import Styled from "styled-components";

const LandingContent = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  font-size: 20pt;

  .delete-message {
    font-size: 14pt;
    font-weight: bold;
    color: green;
    -webkit-animation: fadeAnimation 3s forwards; 
    animation: fadeAnimation 3s forwards;
    margin-bottom: 30px;
  }

  @keyframes fadeAnimation {
    0%   {opacity: 1;}
    90%  {opacity: 1;}
    100% {opacity: 0;}
  }

  @-webkit-keyframes fadeAnimation {
      0%   {opacity: 1;}
      90%  {opacity: 1;}
      100% {opacity: 0;}
  }
`

function Landing() {
  const { state } = useLocation();

  return (
    <LandingContent>
      { state ? <p className='delete-message'>Item Deleted!</p> : null }
      <p>Choose an action above.</p>
    </LandingContent>
  )
}

export default Landing;