import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { useParams } from "react-router-dom";


const ItemsContent = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function CategoryItems() {
  const { category } = useParams();

  const [items, setItems] = useState([]);
  console.log(items);
  async function getItemsByCategory() {
    const response = await fetch(`http://localhost:3000/categories/${category}`);
    const items = await response.json();

    return setItems(items);
  }

    useEffect(() => {
      let isMounted = true;

      if (isMounted) getItemsByCategory();

      return () => {
        isMounted = false;
      }
    }, []);
  
  return (
    <ItemsContent>
      {/* TODO Render all items */}
      <p>{`All items for the ${category} category`}</p>
    </ItemsContent>
  )
}

export default CategoryItems;
