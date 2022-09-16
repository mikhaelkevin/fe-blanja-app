import React, { useState } from 'react';
import styles from '../../styles/module/DetailProduct.module.css';

import ItemRating from '../Home/ItemComponent/ItemRating';
import Image from '../Global/Image';

import blackColor from '../../assets/solid-black.svg';
import orangeColor from '../../assets/solid-orange.svg';
import grayColor from '../../assets/solid-grey.svg';
import purpleColor from '../../assets/solid-purple.svg';

import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';
import ColorPicker from './OrderSectionComponent/ColorPicker';

function OrderSection() {
  const [total, setTotal] = useState(1);

  const totalDecrement = (prodTotal) => {
    let decrementResult = Number(prodTotal) - 1;
    if (decrementResult < 0) decrementResult = 0;
    setTotal(decrementResult.toString());
  };

  const totalIncrement = (prodTotal) => {
    const incrementResult = Number(prodTotal) + 1;
    setTotal(incrementResult.toString());
  };

  return (
    <div className={styles.detailProd__productOrderMenu}>
      <h3>Baju Muslim Pria</h3>
      <h5 className="text-muted">Zalora Cloth</h5>
      <div className={styles.detailProd__prodRating}>
        <ItemRating />
      </div>
      <div className={styles.detailProd__prodPrice}>
        <h5 className="text-muted">Price</h5>
        <h3>$ 40.0</h3>
      </div>
      <div className={styles.detailProd__prodColor}>
        <h5>Color</h5>
        <div className="row h-100">
          <ColorPicker data={{ image: blackColor, alt: 'black-color' }} />
          <ColorPicker data={{ image: orangeColor, alt: 'orange-color' }} />
          <ColorPicker data={{ image: grayColor, alt: 'gray-color' }} />
          <ColorPicker data={{ image: purpleColor, alt: 'purple-color' }} />
        </div>
      </div>
      <div className={styles.detailProd__prodSize}>
        <div className="row">
          <div className="col-md-6 col-xl-3">
            <h5>Size</h5>
            <select name="size" id="size" className="form-select form-select-lg w-75">
              <option value="S">S</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="XXXL">XXXL</option>
            </select>
          </div>
          <div className="col-md-6 col-xl-3">
            <h5>Jumlah</h5>
            <button className="btn btn-lg rounded-circle bg-secondary border-0" type="button" onClick={() => totalDecrement(total)}>
              <Image data={{ image: minus, alt: 'button-minus' }} />
            </button>
            <input type="number" name="total" id="total" className="w-25 mx-1 text-center border-0" min={0} value={total} onChange={() => setTotal(total)} />
            <button className="btn btn-lg rounded-circle border border-1" type="button" onClick={() => totalIncrement(total)}>
              <Image data={{ image: plus, alt: 'button-plus' }} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.detailProd__buttonAction}>
        <div className="row">
          <div className="col-xl-3 col-md-6 my-md-2">
            <button className="btn btn-lg w-100 btn-outline-danger rounded-pill" type="button">Chat</button>
          </div>
          <div className="col-xl-3 col-md-6 my-md-2">
            <button className="btn btn-lg w-100 btn-outline-danger rounded-pill" type="button">Add bag</button>
          </div>
          <div className="col-xl-6 col-md-12 my-md-2">
            <button className="btn btn-lg w-100 btn-danger rounded-pill" type="button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSection;
