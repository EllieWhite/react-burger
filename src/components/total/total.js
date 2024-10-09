import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './total.module.css'; 

function Total() {
    return(
        <div className={styles.total}>
            <p className="text text_type_digits-medium mr-2">600</p>
            <CurrencyIcon type="primary" />
        </div>
       
    )
}

export default Total;