import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/module/Profile.module.css';

function AccountInputBox({
  data: {
    label, type, name, placeholder, defaultValue,
  },
}) {
  return (
    <div className="row mb-4 me-auto w-100 ">
      <div className={`col-xl-3 col-md-12  d-flex ${styles.profile__inputBoxLabel}`}><h5>{label}</h5></div>
      <div className="col-xl-9 col-md-12">
        <input type={type} name={name} id={name} placeholder={placeholder} className="form-control form-control-lg" defaultValue={defaultValue} />
      </div>
    </div>
  );
}

AccountInputBox.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
  }).isRequired,
};

export default AccountInputBox;
