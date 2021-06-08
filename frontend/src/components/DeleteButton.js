import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom'
import Styled from "styled-components";

const Button = Styled.button`
  margin-top: 30px;
  color: white;
  background-color: red;
  padding: 5px 10px;
`

function DeleteButton(props) {
  const [clickCount, setClickCount] = useState(0);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteFailed, setDeleteFailed] = useState(false);

  async function attemptDelete() {
    const requestOptions = { method: 'DELETE' };

    try {
      const response = await fetch(`http://localhost:3000/items/delete/${props.itemId}`, requestOptions);

      if (response.status === 200) {
        setDeleteSuccess(true);
      } else {
        setDeleteFailed(true);
        setClickCount(0);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick() {
    if (clickCount === 0) {
      const newCount = clickCount + 1;
      setClickCount(newCount);
    } else if (clickCount === 1) {
      attemptDelete();
      const newCount = clickCount + 1;
      setClickCount(newCount);
    }  
  }

  return (
      <>
        <Button onClick={handleClick} disabled={clickCount === 2}>
          {clickCount === 0 ? 'Delete Item?' : 'Confirm Delete'}
        </Button>
        {deleteFailed && <p>Something went wrong. Delete Failed.</p>}
        { deleteSuccess && 
          <Redirect to={{
              pathname: '/',
              state: { deleteSuccess: true }
            }} 
          />
        }
      </>
  )
}

export default DeleteButton;
