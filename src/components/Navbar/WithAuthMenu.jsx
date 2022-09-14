import React from 'react';

import styles from '../../styles/module/Navbar.module.css';

import Image from '../Global/Image';

import notificationIcon from '../../assets/notification.svg';
import chatIcon from '../../assets/mail.svg';
import avatar from '../../assets/avatar.svg';

function WithAuthMenu() {
  return (
    <>
      <div className={`btn-group ${styles.desktop__menuNotification}`}>
        <button type="button" className="btn border border-0" data-bs-toggle="dropdown" aria-expanded="false">
          <Image data={{ image: notificationIcon, alt: 'notification-icon' }} />
        </button>
        <div className="dropdown-menu">
          <h5 className="text-center dropdown-item text-muted">Seems you have no notification</h5>
        </div>
      </div>
      <div className={`btn-group ${styles.desktop__menuChat}`}>
        <button type="button" className="btn border border-0 " data-bs-toggle="dropdown" aria-expanded="false">
          <Image data={{ image: chatIcon, alt: 'chat-icon' }} />
        </button>
        <div className="dropdown-menu">
          <h5 className="text-center dropdown-item text-muted">Seems you have no chat</h5>
        </div>
      </div>
      <div className={`btn-group ${styles.desktop__menuAvatar}`}>
        <button type="button" className="btn border border-0" data-bs-toggle="dropdown" aria-expanded="false">
          <Image data={{ image: avatar, alt: 'avatar-icon' }} />
        </button>
        <ul className="dropdown-menu">
          <li><a href="/login" className="dropdown-item">My Profile</a></li>
          <hr />
          <li><a href="/login" className="dropdown-item">Logout</a></li>
        </ul>
      </div>
    </>
  );
}

export default WithAuthMenu;
