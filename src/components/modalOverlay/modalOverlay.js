import styles from './modalOverlay.module.css';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector("body");

const ModalOverlay = ({ children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalOverlay;