import React from 'react';
import FormCard from '../FormCard';

function DescriptionCard() {
  return (
    <FormCard title="Description">
      <div className="p-lg-3 p-md-4">
        <textarea name="description" id="description-area" rows="10" className="form-control form-control-lg w-100" placeholder="Product description..." />
      </div>
    </FormCard>
  );
}

export default DescriptionCard;
