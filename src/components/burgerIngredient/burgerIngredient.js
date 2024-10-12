import styles from './burgerIngredient.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredientDetails/ingredientDetails';
import { ingredientType } from '../../utils/types'; 

const BurgerIngredient = ({ ingredient }) => {
  const [showModal, setShowModal] = useState(false);

  const handleIngredientClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className={styles.item} onClick={handleIngredientClick}>
        {ingredient._id === '60666c42cc7b410027a1a9b1' ||
        ingredient._id === '60666c42cc7b410027a1a9b9' ? (
          <Counter count={1} size="default" extraClass="m-1" />
        ) : null}
        <img
          src={ingredient.image}
          alt={ingredient.name}
          srcSet={`${ingredient.image} 1x, ${ingredient.image_large} 2x`}
        />
        <div className={`${styles.currency} pt-1`}>
          <span className="pr-2 text text_type_main-medium">
            {ingredient.price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.name} pt-1 text text_type_main-default`}>
          {ingredient.name}
        </p>
      </button>

      {showModal && (
        <Modal
          onClick={closeModal}
          isOpen={showModal}
          onClose={closeModal}
        >
          <IngredientDetails
            name={ingredient.name}
            image={ingredient.image_large}
            alt={ingredient.name}
            calories={ingredient.calories}
            proteins={ingredient.proteins}
            fat={ingredient.fat}
            carbohydrates={ingredient.carbohydrates}
          />
        </Modal>
      )}
    </>
  );
};

BurgerIngredient.propTypes = {
  ingredient: ingredientType.isRequired
};

export default BurgerIngredient;
