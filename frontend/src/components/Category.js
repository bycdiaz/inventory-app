import React from "react";
import Styled from "styled-components";

const CategoryContainer = Styled.div`

`

function Category(props) {
  return (
    <CategoryContainer>
      <p className='name'>{props.name}</p>
      <p className='descriptipn'>{props.description}</p>
    </CategoryContainer>
  )
}

export default Category;