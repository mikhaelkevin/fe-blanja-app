import React from 'react';
import styles from '../../../styles/module/Profile.module.css';
import DescriptionCard from './FormComponent/DescriptionCard';

import InventoryCard from './FormComponent/InventoryCard';
import ItemDetailsCard from './FormComponent/ItemDetailsCard';
import PhotosCard from './FormComponent/PhotosCard';

function MyProductContent() {
  return (
    <form className={styles.profile__productForm}>
      <InventoryCard />
      <ItemDetailsCard />
      <PhotosCard />
      <DescriptionCard />
      <div className="d-flex justify-content-end w-100">
        <button type="submit" className="btn btn-danger btn-lg rounded-pill w-25">Jual</button>
      </div>
    </form>
  );
}

export default MyProductContent;
