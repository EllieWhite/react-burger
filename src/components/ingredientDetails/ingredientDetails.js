import styles from './ingredientDetails.module.css';
import PropTypes from 'prop-types';

const IngredientDetails = ({name, image, alt, calories, proteins, fat, carbohydrates}) => {
    return(
        <>
            <h3 className="text text_type_main-large">Детали ингредиента</h3>
            <div className={styles.group}>
                <img
                    src={image}
                    alt={alt}
                />
                <h4 className="text text_type_main-medium mt-4">{name}</h4>
                <div className={`${styles.infoGroup} mt-8`}>
                    <div className={` ${styles.item} text_color_inactive`}>
                        <p className="text text_type_main-default">Калории,ккал</p>
                        <p className="text text_type_digits-default">{calories}</p>
                    </div>
                    <div className={` ${styles.item} text_color_inactive`}>
                        <p className="text text_type_main-default">Белки, г</p>
                        <p className="text text_type_digits-default">{proteins}</p>
                    </div>
                    <div className={` ${styles.item} text_color_inactive`}>
                        <p className="text text_type_main-default">Жиры, г</p>
                        <p className="text text_type_digits-default">{fat}</p>
                    </div>
                    <div className={` ${styles.item} text_color_inactive`}>
                        <p className="text text_type_main-default">Углеводы, г</p>
                        <p className="text text_type_digits-default">{carbohydrates}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

IngredientDetails.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
};

export default IngredientDetails;