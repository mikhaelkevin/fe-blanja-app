import React from 'react';
import styles from '../../styles/module/Checkout.module.css';

function AddressCard() {
  return (
    <div className={`card mb-4 ${styles.checkout__addressCard}`}>
      <div className="card-header d-flex align-items-center px-4"><h4>Shipping Address</h4></div>
      <div className="card-body px-4 pb-5">
        <h5><p><b>Andreas Jane</b></p></h5>
        <p>
          {`Perumahan sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banymas, 
                Jawa Tengah, 53181 [Tukupidia Note: Blok C 16] Sokaraja, Kab. Banyumas, 53181 `}
        </p>
        <button className="btn btn-lg btn-outline-secondary rounded-pill" type="button">
          <span>Choose another address</span>
        </button>
      </div>
    </div>
  );
}

export default AddressCard;
