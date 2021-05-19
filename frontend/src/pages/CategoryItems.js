import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { useParams } from 'react-router-dom';

import ItemCard from '../components/ItemCard';


const ItemsContent = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function CategoryItems() {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let isMounted = true;
    
    async function getItemsByCategory() {
      const response = await fetch(`http://localhost:3000/categories/${category}`);
      const items = await response.json();
  
      return setItems(items);
    }

    if (isMounted) getItemsByCategory();

    return () => {
      isMounted = false;
    }
  },[category]);

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
