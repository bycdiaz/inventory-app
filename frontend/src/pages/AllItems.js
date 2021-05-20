import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';

import ItemCard from '../components/ItemCard';

const AllitemsStyles = Styled.div`

`

function AllItems() {  
  const [items, setItems] = useState([]);
  
  async function getAllItems() {
    const response = await fetch('http://localhost:3000/items');
    const items = await response.json();

    return setItems(items);;
  }

    useEffect(() => {
      let isMounted = true;

      if (isMounted) getAllItems();

      return () => {
        isMounted = false;
      }
    }, []);

  function Items() {
    return (
      <ul className='items-container'>
        { items.map(item =>  <li key={item._id}> <ItemCard item={item} /> </li>) }
      </ul>
    )
  }

  return (
    <AllitemsStyles>
      <h2>Click item for more details or to edit.</h2>
      <Items />
    </AllitemsStyles>
  )
}

export default AllItems;
