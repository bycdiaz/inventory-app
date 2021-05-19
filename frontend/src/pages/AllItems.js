import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const AllitemsStyles = Styled.div`
  .item {
    border: solid black 1px;
    min-width: 300px;
    height: auto;
  }

  .items-container {
    display: flex;
    flex-flow: row wrap;
  }
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
      
        <ul className='items-container'>
          {items.map(item => {
            return (
              <Link key={item._id} to={`/${item._id}`}>
                <li className='item'>
                  <div>
                    <p>Name: {item.name}</p>
                    <p>Description: {item.description}</p>
                  </div>
                </li>
              </Link>
            )
          })}
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
