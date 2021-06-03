import React, { useState } from 'react';
import Styled from 'styled-components';

const Form = Styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  .save-result {
    text-align: center;
    margin-top: 20px;
    width: 30%;
  }

  .save-success {
    background-color: #a6f1a6;
    padding: 10px;
    border-radius: 10px;
  }

  .save-fail {
    background-color: #E34234;
    padding: 10px;
    border-radius: 10px;
  }
`

function ItemForm(props) {
  const [ formState, setFormState ] = useState({});
  const [saveSuccessful, setSaveSuccessful] = useState(null);

  function handleChange(event) {
    setFormState(previousState => ({
      ...previousState,
      [event.target.name]: event.target.value
    }))
  }

  async function sendUpdates() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState)
  };

    try {
      await fetch(`http://localhost:3000/items/update/${props.item._id}`, requestOptions);
      setSaveSuccessful(true);
    } catch (error) {
      setSaveSuccessful(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendUpdates();
  }

  function SaveResult() {
    if (saveSuccessful !== null) {
      return (
        <div className='save-result'>
          { saveSuccessful ? 
            <p className='save-success'>Changes Saved!</p> :
            <p className='save-fail'>Something went wrong.</p>
          }
        </div>
      )
    } else {
      return null;
    }
  }

  return (
    <Form onSubmit={handleSubmit} autocomplete="off">
      <label htmlFor='name'>Item Name:</label>
      <input
        type='text'
        name='name'
        defaultValue={props.item.name}
        onChange={handleChange}
      ></input>
      <input type='submit' value='Save Changes'></input>
      <SaveResult />
    </Form>
  )
}

export default ItemForm;
