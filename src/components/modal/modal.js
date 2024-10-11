import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import ModalOverlay from '../modalOverlay/modalOverlay';

const modalRoot = document.querySelector("body");

const Modal = ({ onClick, children, moreClasses, isOpen, onClose }) => {
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <>
        <div className={`${styles.modal} pl-10 pr-10 pt-10 pb-15 ${moreClasses}`} onClick={handleOutsideClick}>
        <CloseIcon type="primary" className={styles.closeBtn} onClick={onClick} />
        {children}
        </div>
        <ModalOverlay onClick={onClick} />
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  moreClasses: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
