import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../../styles/module/MyBag.module.css';

function SummaryBox({ children, buttonText }) {
  const navigate = useNavigate();
  return (
    <div className="col-md-12 col-xl-4">
      <div className={`card ${styles.myBag__summary}`}>
        <div className="card-body">
          <form onSubmit={() => navigate('/checkout')}>
            <h5 className="mb-4">Shopping Summary</h5>
            {children}
            <button type="submit" className="btn btn-lg w-100 rounded-pill">{buttonText}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

SummaryBox.propTypes = {
  children: PropTypes.element.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default SummaryBox;
