import React from 'react';
import PropTypes from 'prop-types';

function ContentCard({ children, data: { title, description } }) {
  return (
    <div className="card w-100">
      <div className="card-body">
        <h4>{title}</h4>
        <h5 className="text-muted">{description}</h5>
        <hr className="mb-5" />
        {children}
      </div>
    </div>
  );
}

ContentCard.propTypes = {
  children: PropTypes.element.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContentCard;
