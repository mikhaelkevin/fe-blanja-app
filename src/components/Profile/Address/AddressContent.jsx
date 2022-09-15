import React from 'react';
import ContentCard from '../ContentCard';
import styles from '../../../styles/module/Profile.module.css';
import AddressCard from './AddressCard';

function AddressContent() {
  return (
    <ContentCard data={{ title: 'Choose another address', description: 'Manage your shipping address' }}>
      <div className={styles.profile__address}>
        <div className={styles.profile__newAddress}>
          <button type="button" className="btn btn-lg w-100">Add new address</button>
        </div>
        <AddressCard />
      </div>
    </ContentCard>
  );
}

export default AddressContent;
