import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const Modal = ({onClick, children, moreClasses}) => {
    return (
        <div className={`${styles.modal} pl-10 pr-10 pt-10 pb-15 ${moreClasses}`}>
            <CloseIcon type="primary" className={styles.closeBtn} onClick={onClick} />
            {children}
        </div>
    )
}

Modal.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    moreClasses: PropTypes.string,
};

export default Modal;