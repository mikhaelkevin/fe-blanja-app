import React from 'react';
import firstItem from '../../assets/item-1.svg';
import secondItem from '../../assets/item-2.svg';
import ItemBox from './ItemBox';

function ItemsList() {
  return (
    <>
      <ItemBox data={{ image: firstItem, title: "Men's formal suit - Black", brand: 'Zalora Cloth' }} />
      <ItemBox data={{ image: secondItem, title: "Men's jacket Jeans", brand: 'Zalora Cloth' }} />
    </>
  );
}

export default ItemsList;
