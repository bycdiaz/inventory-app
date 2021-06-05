import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Styled from "styled-components";

import ItemForm from '../components/item-form/ItemForm';
import DeleteButton from '../components/DeleteButton';

const EditItemContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ebc340;
  height: 100%;
  width: 60%;
  margin-top: 30px;
  padding: 20px;
  border-radius: 10px;
`

function EditItem() {
  const { itemId } = useParams();
  const [ item, setItem ] = useState([]);

  useEffect(() => {
    let isMounted = true;
    
    async function getItemById() {
      const response = await fetch(`http://localhost:3000/items/${itemId}`);
      const item = await response.json();

      return setItem(item);
    }

    if (isMounted) getItemById();

    return () => {
      isMounted = false;
    }
  },[itemId]);

  return (
    <EditItemContainer>
      <ItemForm item={item} />
      <DeleteButton />
    </EditItemContainer>
  )
}

export default EditItem;
