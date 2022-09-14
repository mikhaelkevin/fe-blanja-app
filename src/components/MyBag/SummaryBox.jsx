import React from 'react';
import styles from '../../styles/module/MyBag.module.css';

function SummaryBox() {
  return (
    <div className="col-md-12 col-xl-4">
      <div className={`card ${styles.myBag__summary}`}>
        <div className="card-body">
          <form>
            <h5 className="mb-4">Shopping Summary</h5>
            <div className="row mb-5">
              <div className="col-6 text-muted">Total price</div>
              <div className="col-6 text-end">$ 40.0</div>
            </div>
            <button type="submit" className="btn btn-lg w-100 rounded-pill">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SummaryBox;
