import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerConstructor.module.css';
import { ingredientType } from '../../utils/types'; 

const BurgerConstructor = ({ ingredients }) => {
  const buns = ingredients.filter(ingredient => ingredient.type === 'bun');
  const otherIngredients = ingredients.filter(ingredient => ingredient.type !== 'bun');

  return (
    <>
      {buns.length > 0 && (
        <div key={buns[0]._id + '-top'} className="ml-8">
          <ConstructorElement
            type={buns[0].type}
            text={`${buns[0].name} (верх)`}
            price={buns[0].price}
            thumbnail={buns[0].image}
            isLocked={true}
            extraClass={`${styles.constructorElement} ${styles.first}`}
          />
        </div>
      )}

      <div className={styles.group}>
        {otherIngredients.map((ingredient) => (
          <div key={ingredient._id} className={styles.item}>
            <DragIcon type="primary" className={`${styles.dragIcon} mr-2`} />
            <ConstructorElement
              type={ingredient.type}
              text={ingredient.name}
              price={ingredient.price}
              thumbnail={ingredient.image}
              extraClass={styles.constructorElement}
            />
          </div>
        ))}
      </div>

      {buns.length > 0 && (
        <div key={buns[0]._id + '-bottom'} className="ml-8">
          <ConstructorElement
            type={buns[0].type}
            text={`${buns[0].name} (низ)`}
            price={buns[0].price}
            thumbnail={buns[0].image}
            isLocked={true}
            extraClass={`${styles.constructorElement} ${styles.last}`}
          />
        </div>
      )}
    </>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired
};

export default BurgerConstructor;
