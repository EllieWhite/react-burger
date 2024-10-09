import styles from './orderDetails.module.css';
import done from '../../images/done.png';

function OrderDetails() {
    return  (
        <div className={styles.orderBox}>
            <p className={`${styles.title} text_type_digits-large`}>034536</p>
            <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
            <img className="mt-15" src={done} />
            <p className="mt-15 text text_type_main-default">Ваш заказ начали готовить</p>
            <p className="mt-2 text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>
    )


}

export default OrderDetails;