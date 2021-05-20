import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const ItemContent = Styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
  padding: 2px 16px;
  
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

function ItemCard(props) {
  return (
    <ItemContent>
      <p>{ props.item.name }</p>
      <p>{ props.item.description }</p>
      <Link to={`items/${props.item._id}`}>Click for Details or to Edit</Link>
    </ItemContent>
  )
}

export default ItemCard;
