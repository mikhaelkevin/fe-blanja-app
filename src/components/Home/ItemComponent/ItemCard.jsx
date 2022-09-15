import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import Image from '../../Global/Image';
import ItemRating from './ItemRating';

import styles from '../../../styles/module/Home.module.css';

function ItemCard({ data }) {
  const {
    image, title, price, brand,
  } = data;

  const navigate = useNavigate();

  return (
    <div className="col-xl-2 mt-xl-4 col-md-3 mt-md-3">
      <div className={`card h-100 ${styles.home__itemCard}`} onClick={() => navigate(`/detail/${title}`)} onKeyPress={() => navigate(`/detail/${title}`)} role="presentation">
        <Image data={{ image, alt: title }} />
        <div className="card-body">
          <h5 className="card-title text-start">{title}</h5>
          <p className="card-text mb-1">{`$ ${price}.0`}</p>
          <p className="text-muted mb-1">{brand}</p>
          <ItemRating />
        </div>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemCard;
