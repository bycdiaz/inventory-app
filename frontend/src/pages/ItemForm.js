import React, { useState } from 'react';
import Styled from "styled-components";

const ItemFormContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ebc340;
  height: 100%;
  width: 60%;
  margin-top: 30px;
  padding: 20px;
`

function ItemForm(props) {

  return (
    <ItemFormContainer>Item Form</ItemFormContainer>
  )
}

export default ItemForm;
