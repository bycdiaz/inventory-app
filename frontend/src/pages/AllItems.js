import React, { useState, useEffect } from "react";
import Styled from "styled-components";

const AllitemsContainer = Styled.div`

`

function AllItems() {  
  const [items, setItems] = useState([]);
  
  async function getAllItems() {
    const response = await fetch("http://localhost:3000/allitems");
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
      <ul>
        {items.map(item => {
          return <li key={item._id}>{item.name}</li>
        })}
      </ul>
    )
  }
  
  return (
    <AllitemsContainer>
      <Items />
    </AllitemsContainer>
  )
}

export default AllItems;