import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryContainer = Styled.div`
  border: 2px solid black;
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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
  } */
`

function Category(props) {
  return (
    <CategoryContainer >
      <div className="info">
        <Link to={{
          pathname: `/categories/${props.name.toLowerCase()}`,
          state: { category: props}
        }}>
          <p className="name">{props.name}</p>
        </Link>
        <p>{props.description}</p> 
      </div>
      <Link
        to={{
          pathname: `/categories/${props.id}/edit`,
          state: {
            categoryId: props.id,
            name: props.name,
            description: props.description
          }
        }}
      >
        <button>Edit Category</button>
      </Link>
    </CategoryContainer>  
  )
}

export default Category;
