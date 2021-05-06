import React, { useEffect } from "react";
import Styled from "styled-components";

// import Category from "../components/Category";

const CategoriesContent = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function Categories() {
  
  async function getCategories() {
    const response = await fetch("http://localhost:3000/categories");
    
    console.log(response);
    const data = await response.json();
    console.log(data);
  }

    useEffect(() => {
      getCategories();
      // TODO Add returned categories to state.
    }, []);

  return (
    <CategoriesContent>
        <p>test</p>
    </CategoriesContent>
  )
}

export default Categories;