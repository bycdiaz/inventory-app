import React, { useState } from 'react';
import Styled from 'styled-components';

const Form = Styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

`

function ItemForm(props) {
  const [ formState, setFormState ] = useState({});

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
    const update = await fetch(`http://localhost:3000/items/update/${props.item._id}`, requestOptions);
  
    if (update.status === 200) {
      // TODO Use response to notify user of success
    } else {

    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendUpdates();
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
      <input type='submit' value='Submit Changes'></input>
    </Form>
  )
}

export default ItemForm;
