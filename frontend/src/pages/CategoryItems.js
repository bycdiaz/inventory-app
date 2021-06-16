import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import ItemCard from '../components/ItemCard';


const ItemsContent = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function CategoryItems() {
  const { state } = useLocation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function getItemsByCategory() {
      const url = `http://localhost:3000/categories/${state.category.name}/?id=${state.category.id}`;
      const response = await fetch(url);
      const items = await response.json();

      return setItems(items);
    }

    if (isMounted) getItemsByCategory();

    return () => {
      isMounted = false;
    }
  },[state.category]);

  function Items() {
    return (
      <ul>
        { items.map(item =>  {
          return (
            <li key={item._id}>
              <ItemCard item={item} />
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <ItemsContent>
      <Items />
    </ItemsContent>
  )
}

export default CategoryItems;
