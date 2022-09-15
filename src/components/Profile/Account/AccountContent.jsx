/* eslint-disable no-unused-vars */
import React from 'react';
import Image from '../../Global/Image';
import avatar from '../../../assets/avatar.svg';
import AccountInputBox from './AccountInputBox';
import styles from '../../../styles/module/Profile.module.css';
import ContentCard from '../ContentCard';

function AccountContent() {
  return (
    <ContentCard data={{ title: 'My Profile', description: 'Manage your profile information' }}>
      <form className="mb-3">
        <div className="row">
          <div className="col-7">
            <AccountInputBox data={{
              label: 'Name', type: 'text', name: 'name', placeholder: 'Name', defaultValue: 'Jonas Mikael',
            }}
            />
            <AccountInputBox data={{
              label: 'Email', type: 'email', name: 'email', placeholder: 'example@gmail.com', defaultValue: 'johanes@gmail.com',
            }}
            />
            <AccountInputBox data={{
              label: 'Phone', type: 'text', name: 'phonenumber', placeholder: '081xxxxxxxxx', defaultValue: '08901289012',
            }}
            />
            <div className="row mb-4 me-auto w-100">
              <div className={`col-xl-3 col-md-12 d-flex ${styles.profile__inputRadio}`}><h5>Gender</h5></div>
              <div className="col-xl-9 col-md-12">
                <div className="form-check form-check-inline">
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    <span>Laki-laki</span>
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="laki-laki" />
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    <span>Perempuan</span>
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="perempuan" />
                  </label>
                </div>
              </div>
            </div>
            <AccountInputBox data={{ label: 'Birth', type: 'date', name: 'birth' }} />
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-danger btn-lg w-50 rounded-pill">Save</button>
            </div>
          </div>
          <div className="col-1">
            <div className="vr h-50" />
          </div>
          <div className={`col-4 ${styles.profile__uploadAvatar}`}>
            <div className="row d-flex justify-content-center">
              <Image data={{ image: avatar, alt: 'avatar' }} />
              <div className="row justify-content-center mt-4">
                <button type="submit" className="btn btn-outline-secondary rounded-pill">Select image</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </ContentCard>
  );
}

export default AccountContent;
