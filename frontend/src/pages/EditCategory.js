import React from 'react';
import { useLocation } from 'react-router-dom';

import CategoryForm from '../components/CategoryForm';

function EditCategory() {
  const { state } = useLocation();

  const category = {
    name: state.name || '',
    id: state.categoryId || '',
    description: state.description || ''
  }

  return (
    <CategoryForm category={category} />
  )
}

export default EditCategory;
