import React from 'react';
import styles from '../../styles/module/MyBag.module.css';

function CheckAllBox() {
  return (
    <div className={`card mb-5 ${styles.myBag__itemCheckAll}`}>
      <div className="card-body ">
        <div className="row d-flex align-items-center">
          <div className="col-md-1">
            <input type="checkbox" name="select-all" id="all-item-checkbox" className="form-check-input" defaultChecked />
          </div>
          <div className="col-md-8">
            <h5>
              Select all items
              {' '}
              <span className="text-muted">(2 items selected)</span>
            </h5>
          </div>
          <div className="col-md-3">
            <button className="btn border border-0 text-danger" type="button"><h5>Delete</h5></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckAllBox;
