import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../Global/Image';

function SelectionContent({ data: { sectionName, image } }) {
  return (
    <div className="tab-pane fade w-100 h-100" id={sectionName} role="tabpanel" aria-labelledby={`${sectionName}-tab`}>
      <Image data={{ image, alt: 'main-image' }} />
    </div>
  );
}

SelectionContent.propTypes = {
  data: PropTypes.shape({
    sectionName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default SelectionContent;
