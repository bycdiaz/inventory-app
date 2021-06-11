import React from 'react';

function CategorySelection(props) {
  const filteredCategories = props.categories.filter(category => category.name !== props.categoryName);

  return (
    <>
      <p>Current Category - {props.categoryName}</p>
      <label htmlFor='category'>New Category:</label>
      <select
        name='category'
        onChange={props.handleChange}
        required={props.categories.length === filteredCategories.length}
      >
      <option value=""> -- select an option -- </option>
        {filteredCategories.map(category => {
          return (
            <option
              key={category._id}
              value={category._id}
            >
              { category.name }
            </option>
          )
        })}
      </select>
    </>
  )
}

export default CategorySelection;
