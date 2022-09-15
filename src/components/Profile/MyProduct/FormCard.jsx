import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/module/Profile.module.css';

function FormCard({ title, children }) {
  return (
    <div className={`card ${styles.profile__formCard}`}>
      <div className="card-header p-4 bg-white">
        <h4>{title}</h4>
      </div>
      <div className="card-body p-4 h-100">
        {children}
      </div>
    </div>
  );
}

FormCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default FormCard;
