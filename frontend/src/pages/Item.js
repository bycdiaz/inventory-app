import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import Styled from "styled-components";

const ItemContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ebc340;
  height: 100%;
  width: 60%;
  margin-top: 30px;
  padding: 20px;

  .page-title {
    font-size: 18pt;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
  }

  .details {
    width: 80%;
  }

  .edit-item {
    padding: 10px 0px;
    width: 40%;
  }

  .item-detail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0px;
  }
`

function Item() {
  const { itemId } = useParams();
  const [item, setItemDetails] = useState([]);

  useEffect(() => {
    let isMounted = true;
    
    async function getItemById() {
      const response = await fetch(`http://localhost:3000/items/${itemId}`);
      const item = await response.json();

      return setItemDetails(item);
    }

    if (isMounted) getItemById();

    return () => {
      isMounted = false;
    }
  },[itemId]);

  function ItemDetails() {
    const { categoryName, description, name, price, stock } = item;
    const detailsToDisplay = {
      category: categoryName,
      description,
      name,
      price,
      stock
    }
    console.log(detailsToDisplay);

    return Object.keys(detailsToDisplay).map(detailName => {
      return (
        <div className='item-detail' key={name}>
          <p>{detailName.charAt(0).toUpperCase() + detailName.slice(1)}</p>
          <p>{detailsToDisplay[detailName]}</p>
        </div>
      )
    })
  }

  ItemDetails()

  return (
    <ItemContainer>
      <h1 className='page-title'>Item Details</h1>
      <div className='details'>
        <ItemDetails />
      </div>
      <button className='edit-item'>Edit This Item</button>
    </ItemContainer>
  )
}

export default Item;
