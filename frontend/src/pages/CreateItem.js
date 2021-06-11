import React from 'react';
import Styled from "styled-components";

import ItemForm from '../components/item-form/ItemForm';

const CreateItemContainer = Styled.div`
  margin-top: 60px;
`

function CreateItem() {
  const newItem = {
    name: '',
    categoryName: '',
    description: '',
    price: 0,
    stock: 0
  }

  return (
    <CreateItemContainer>
      <ItemForm item={newItem} />
    </CreateItemContainer>
  );
}

export default CreateItem;
