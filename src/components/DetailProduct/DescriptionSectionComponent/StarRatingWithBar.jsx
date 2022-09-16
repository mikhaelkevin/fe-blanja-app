import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../Global/Image';
import activeStar from '../../../assets/star-active.svg';

function StarRatingWithBar({ data: { starValue, userCount, barWidth } }) {
  return (
    <div className="row d-flex align-items-center">
      <div className="col-2"><Image data={{ image: activeStar, alt: 'active-star' }} /></div>
      <div className="col-1"><span>{starValue}</span></div>
      <div className="col-7">
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            aria-label="Danger example"
            style={{ width: `${barWidth}%` }}
            aria-valuenow={barWidth}
            aria-valuemin="0"
            aria-valuemax={barWidth}
          />
        </div>
      </div>
      <div className="col-1"><span>{userCount}</span></div>
    </div>
  );
}

StarRatingWithBar.propTypes = {
  data: PropTypes.shape({
    starValue: PropTypes.number.isRequired,
    userCount: PropTypes.number.isRequired,
    barWidth: PropTypes.number.isRequired,
  }).isRequired,
};

export default StarRatingWithBar;
