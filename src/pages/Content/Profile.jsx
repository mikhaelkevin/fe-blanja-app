/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../../styles/module/Profile.module.css';
import TabMenuContent from '../../components/Profile/TabMenuContent';
import Sidebar from '../../components/Profile/Sidebar';

function Profile() {
  return (
    <div className={styles.layouts}>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Sidebar />
          <div className={`col-md-9 col-xl-10 ${styles.profile__content}`}>
            <div className="container h-100">
              <div className="tab-content h-100" id="v-pills-tabContent">
                <TabMenuContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
