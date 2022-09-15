import React from 'react';

function AddressCard() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title"><h5>Andreas Jane</h5></div>
        <p>
          {`Perumahan sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banymas, 
          Jawa Tengah, 53181 [Tukupidia Note: Blok C 16] Sokaraja, Kab. Banyumas, 53181 `}
        </p>
        <button type="button" className="btn border-0 text-danger p-0">Change address</button>
      </div>
    </div>
  );
}

export default AddressCard;
