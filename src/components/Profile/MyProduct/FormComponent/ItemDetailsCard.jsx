import React from 'react';
import FormCard from '../FormCard';

function ItemDetailsCard() {
  return (
    <FormCard title="Item Details">
      <div className="row">

        <div className="input-group col-12 mb-3">
          <label htmlFor="unit-price">
            <h5>Unit price</h5>
            <input type="number" name="unit-price" id="unit-price" className="form-control form-control-lg " />
          </label>
        </div>

        <div className="col-12">
          <label htmlFor="stock">
            <h5>Stock</h5>
            <div className="input-group col-12 mb-3">
              <input type="number" name="stock" id="stock" className="form-control form-control-lg border-end-0" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <span className="input-group-text bg-white border-start-0" id="basic-addon2">Buah</span>
            </div>
          </label>
        </div>

        <div className="col-12 mb-3">
          <label htmlFor="inlineRadioOptions">
            <h5>Condition</h5>
            <div className="row mt-2">
              <div className="col-3">
                <div className="form-check form-check-inline">
                  <label className="form-check-label w-100" htmlFor="inlineRadio1">
                    <span>Baru</span>
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Baru" defaultChecked />
                  </label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check form-check-inline">
                  <label className="form-check-label w-100" htmlFor="inlineRadio2">
                    <span>Bekas</span>
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Bekas" />
                  </label>
                </div>
              </div>
            </div>
          </label>
        </div>

      </div>
    </FormCard>
  );
}

export default ItemDetailsCard;
