/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/module/MyBag.module.css';
import Image from '../Global/Image';

import minus from '../../assets/minus.svg';
import plus from '../../assets/plus.svg';

function ItemBox({ data: { image, title, brand } }) {
  const [qty, setQty] = useState('1');

  useEffect(() => {

  }, [qty]);

  const qtyDecrement = (prodQty) => {
    let decrementResult = Number(prodQty) - 1;
    if (decrementResult < 0) decrementResult = 0;
    setQty(decrementResult.toString());
  };

  const qtyIncrement = (prodQty) => {
    const incrementResult = Number(prodQty) + 1;
    setQty(incrementResult.toString());
  };

  return (
    <div className={`card mb-3 ${styles.myBag__item}`}>
      <div className="card-body">
        <div className="row d-flex align-items-center ">
          <div className="col-1 col-md-1 ">
            <input type="checkbox" name="select-all" id="all-item-checkbox" className="form-check-input" checked />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4 d-flex justify-content-center">
                <Image data={{ image, alt: 'first-item' }} />
              </div>
              <div className={`col-md-8  ${styles.myBag__itemDescription}`}>
                <h5>{title}</h5>
                <p className="text-muted">{brand}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <button className="btn btn rounded-circle bg-light border-0" type="button" onClick={() => qtyDecrement(qty)}>
              <Image data={{ image: minus, alt: 'button-minus' }} />
            </button>
            <input type="number" name="qty" id="qty" className="w-25 mx-1 text-center border-0" min={0} value={qty} onChange={() => setQty(qty)} />
            <button className="btn btn rounded-circle border border-1" type="button" onClick={() => qtyIncrement(qty)}>
              <Image data={{ image: plus, alt: 'button-plus' }} />
            </button>
          </div>
          <div className="col-md-1">
            <button className="btn border border-0 text-danger" type="button"><h5>Delete</h5></button>
          </div>
        </div>
      </div>
    </div>
  );
}

ItemBox.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemBox;
