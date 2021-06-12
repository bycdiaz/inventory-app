import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';

import CategorySelection from '../item-form/CategorySelection';

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
  const [formState, setFormState] = useState({});
  const [saveSuccessful, setSaveSuccessful] = useState(null);
  const [categories, setCategories] = useState([]);
  
  async function getCategories() {
    const response = await fetch("http://localhost:3000/categories");
    const categories = await response.json();

    return setCategories(categories);
  }

  useEffect(() => {
    let isMounted = true;

    if (isMounted) getCategories();

    return () => {
      isMounted = false;
    }
  }, []);

  function handleChange(event) {
    setFormState(previousState => ({
      ...previousState,
      [event.target.name]: event.target.value
    }))
  }

  // WISHLIST Extract this logic to EditItem.js to make ItemForm more modular.
  async function sendUpdates() {
    const requestOptions = {
      method: 'PUT',
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

  async function createItem() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState)
  };

    try {
      await fetch(`http://localhost:3000/items/create`, requestOptions);
      setSaveSuccessful(true);
    } catch (error) {
      setSaveSuccessful(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const editExistingItem = props.item._id;

    if (editExistingItem) {
      sendUpdates();
    } else {
      createItem();
    }
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
      <label htmlFor='name'>Name:</label>
      <input
        type='text'
        name='name'
        defaultValue={props.item.name}
        onChange={handleChange}
        required
      ></input>
      <CategorySelection
        categoryName={props.item.categoryName}
        categories={categories}
        handleChange={handleChange}
      />
      <label htmlFor='description'>Description:</label>
      <textarea
        name='description'
        defaultValue={props.item.description}
        onChange={handleChange}
        required
      ></textarea>
      <label htmlFor='price'>Price:</label>
      <input
        type="number"
        name="price"
        min="1"
        defaultValue={props.item.price}
        step="0.01"
        onChange={handleChange}
        required
      ></input>
      <label htmlFor='stock'>Stock:</label>
      <input
        type="number"
        name="stock"
        defaultValue={props.item.stock}
        onChange={handleChange}
        required
      ></input>
      <input type='submit' value='Save Changes'></input>
      <SaveResult />
    </Form>
  )
}

export default ItemForm;
