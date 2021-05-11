import React, { useState, useEffect } from "react";
import Styled from "styled-components";

// import Category from "../components/Category";

const CategoriesContent = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function Categories() {
  const [categories, setCategories] = useState([]);
  
  async function getCategories() {
    const response = await fetch("http://localhost:3000/categories");
    const categories = await response.json();

    return setCategories(categories);;
  }

    useEffect(() => {
      getCategories();
    }, []);

  const AllCategories = () => {
    if (categories) {
      return (
        <ul>
          { categories.map(category => {
              return <li key={category._id}>{category.name}</li>
            })
          }
        </ul>
      )
    }
  }

  return (
    <CategoriesContent>
        <AllCategories />
    </CategoriesContent>
  )
}

export default Categories;
