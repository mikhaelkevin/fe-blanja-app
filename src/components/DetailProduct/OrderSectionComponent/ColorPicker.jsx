import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../Global/Image';

function ColorPicker({ data: { image, alt } }) {
  return (
    <div className="col-lg-1 col-md-2 h-100">
      <Image data={{ image, alt }} />
    </div>
  );
}

ColorPicker.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default ColorPicker;
