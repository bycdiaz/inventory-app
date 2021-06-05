import React, { useState } from 'react';
import Styled from "styled-components";

const Button = Styled.button`
  margin-top: 30px;
  color: white;
  background-color: red;
  padding: 5px 10px;
`

function DeleteButton() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    // disable button after delete request is sent.
    if (clickCount === 0) {
      const newCount = clickCount + 1;
      setClickCount(newCount);
    } else if (clickCount === 1) {
      console.log('api call for deleting just fired');
      const newCount = clickCount + 1;
      setClickCount(newCount);
    }  
  }

  return (
      <Button onClick={handleClick} disabled={clickCount === 2}>
        {clickCount === 0 ? 'Delete Item?' : 'Confirm Delete'}
      </Button>
      // TODO show delete success or failure
  )
}

export default DeleteButton;
