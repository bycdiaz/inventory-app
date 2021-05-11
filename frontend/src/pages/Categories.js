import React, { useState, useEffect } from "react";
import Styled from "styled-components";

import Category from "../components/Category";

const CategoriesContent = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
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

  const CategoryCards = () => {
    if (categories) {
      return (
        <ul className="container">
          {
          categories.map(({ _id, name, description }) => {
            return (
              <li key={_id}>
                <Category name={name} description={description} />
              </li>
            )
            })
          }
        </ul>
      )
    }
  }

  return (
    <CategoriesContent>
      <CategoryCards />
    </CategoriesContent>
  )
}

export default Categories;
