import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/module/Checkout.module.css';
import Image from '../Global/Image';

function CheckoutItem({
  data: {
    image, title, brand, price,
  },
}) {
  return (
    <div className={`card mb-3 ${styles.checkout__item}`}>
      <div className="card-body">
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <Image data={{ image, alt: 'item-1' }} />
          </div>
          <div className={`col-6 ${styles.checkout__itemDescription}`}>
            <h5>{title}</h5>
            <p className="text-muted">{brand}</p>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-end">
            <h5>
              $
              {' '}
              {price}
              .0
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

CheckoutItem.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default CheckoutItem;
