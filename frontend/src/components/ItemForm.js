import React, { useState } from 'react';
import Styled from "styled-components";

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

  return (
    <Form>
      <label htmlFor="name">Item Name:</label>
      <input
        type="text"
        name="name"
        defaultValue={props.item.name}
        onChange={handleChange}
      ></input>

      {/* <label htmlFor="category">Category:</label>
      
      <input
        type="text"
        name="category"
        defaultValue={props.item.categoryName}
        onChange={handleChange}
      ></input> */}
      <input type="submit" value="Submit Changes"></input>
    </Form>
  )
}

export default ItemForm;
