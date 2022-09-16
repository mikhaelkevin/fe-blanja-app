import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../Global/Image';

function SelectionImage({ data: { selectionName, image } }) {
  return (
    <button
      className="nav-link h-100 w-100 p-0"
      id={`${selectionName}-tab`}
      data-bs-toggle="pill"
      data-bs-target={`#${selectionName}`}
      type="button"
      role="tab"
      aria-controls={selectionName}
      aria-selected="false"
    >
      <Image data={{ image, alt: selectionName }} />
    </button>
  );
}

SelectionImage.propTypes = {
  data: PropTypes.shape({
    selectionName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default SelectionImage;
