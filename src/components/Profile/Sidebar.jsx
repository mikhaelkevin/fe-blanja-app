import React from 'react';
import styles from '../../styles/module/Profile.module.css';
import avatar from '../../assets/avatar.svg';
import Image from '../Global/Image';
import TabMenu from './TabMenu';

function Sidebar() {
  return (
    <div className={`col-md-3 col-xl-2 ${styles.profile__sideBar}`}>
      <div className="row d-flex justify-content-center mb-3">
        <div className={`col-md-12 col-xl-5 d-flex justify-content-center ${styles.profile__sideBar__avatar}`}>
          <Image data={{ image: avatar, alt: 'avatar' }} />
        </div>
        <div className={`col-md-12 col-xl-7 d-flex align-items-center ${styles.profile__sideBar__avatarDetail}`}>
          <div className="row">
            <h5>Johanes Mikael</h5>
            <span className="text-muted">Ubah Profile</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex align-items-start justify-content-center">
        <TabMenu />
      </div>
    </div>
  );
}

export default Sidebar;
