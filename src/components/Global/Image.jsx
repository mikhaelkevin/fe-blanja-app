/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import PropTypes from 'prop-types';
import brokenImage from '../../assets/image_not_supported.svg';

function Image({ data: { image, alt } }) {
  const brokenImageHandler = ({ currentTarget }) => {
    currentTarget.onerror = null;
    currentTarget.src = brokenImage;
  };

  return (
    <img
      src={image || brokenImage}
      alt={alt}
      onError={((e) => brokenImageHandler(e))}
    />
  );
}

Image.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    alt: PropTypes.string,
  }),
};

Image.defaultProps = {
  data: {
    image: brokenImage,
    alt: 'Untitled',
  },
};

export default Image;
