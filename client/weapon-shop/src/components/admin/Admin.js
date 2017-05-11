import React from 'react';
import { Inventory, AddProduct } from './';

export default (props) => {
  return (
    <div className="Admin">
      <AddProduct />
      <Inventory />
    </div>
  );
};