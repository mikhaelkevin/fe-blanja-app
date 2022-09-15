import React from 'react';
import FormCard from '../FormCard';

function InventoryCard() {
  return (
    <FormCard title="Inventory">
      <label htmlFor="inventory">
        <h5>Name of goods</h5>
        <input type="text" name="inventory" id="inventory" className="form-control form-control-lg " />
      </label>
    </FormCard>
  );
}

export default InventoryCard;
