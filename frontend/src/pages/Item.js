import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


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

  return (
    <>
      <p>{item.description}</p>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <p>{item.stock}</p>
      <p>{item.categoryName}</p>
    </>
  )
}

export default Item;
