import React, { useState } from 'react';
import Styled from "styled-components";

const Button = Styled.button`
  margin-top: 30px;
  color: white;
  background-color: red;
`

function DeleteButton() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    const newCount = clickCount + 1;
    setClickCount(newCount);
  }

  return (
    <Button onClick={handleClick}>Delete Item</Button>
  )
}

export default DeleteButton;
