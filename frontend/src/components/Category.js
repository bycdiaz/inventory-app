import React from "react";
import Styled from "styled-components";

const CategoryContainer = Styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .info {
    padding: 5px 16px;
  }

  .name {
    font-weight: bold;
  }
`

function Category(props) {
  return (
    <CategoryContainer>
      <div className="info">
        <p className="name">{props.name}</p>
        <p>{props.description}</p> 
      </div>
    </CategoryContainer>
  )
}

export default Category;