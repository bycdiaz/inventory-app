import React from "react";
import Styled from "styled-components";
import { useParams } from "react-router-dom";


const ItemsContent = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function CategoryItems() {
  const { category } = useParams();
  
  return (
    <ItemsContent>
      {/* TODO Render all items */}
      <p>{`All items for the ${category} category`}</p>
    </ItemsContent>
  )
}

export default CategoryItems;