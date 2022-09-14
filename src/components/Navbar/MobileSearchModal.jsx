import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from '../../styles/module/Navbar.module.css';

function MobileSearchModal(props) {
  const {
    closeModal, show, children, modalTitle,
  } = props;

  return (
    <Modal show={show} animation centered size="lg" className={styles.mobile__searchModal}>
      <Modal.Header className="justify-content-center">
        <Modal.Title>
          {modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        {children}
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button onClick={closeModal} variant="danger" size="lg">Close</Button>
        <Button variant="primary" size="lg">Search</Button>
      </Modal.Footer>
    </Modal>
  );
}

MobileSearchModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  modalTitle: PropTypes.string,
};

MobileSearchModal.defaultProps = {
  modalTitle: 'Untitled modal',
};

export default MobileSearchModal;
