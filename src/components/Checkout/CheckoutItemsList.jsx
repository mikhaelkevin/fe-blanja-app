import React from 'react';
import CheckoutItem from './CheckoutItem';
import firstItem from '../../assets/item-1.svg';
import secondItem from '../../assets/item-2.svg';

function CheckoutItemsList() {
  return (
    <>
      <CheckoutItem
        data={{
          image: firstItem,
          title: "Men's formal suit - Black",
          brand: 'Zalora Cloth',
          price: '20',
        }}
        g
      />
      <CheckoutItem data={{
        image: secondItem,
        title: "Men's Jacket Jeans",
        brand: 'Zalora Cloth',
        price: '20',
      }}
      />
    </>
  );
}

export default CheckoutItemsList;
