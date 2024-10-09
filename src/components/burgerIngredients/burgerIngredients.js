import React from 'react';
import styles from './burgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from './../burgerIngredient/burgerIngredient';
import PropTypes from 'prop-types';

function BurgerIngredients({ ingredients }) {
  const filteredIngredientsBun = ingredients.filter(ingredient => ingredient.type === 'bun');
  const filteredIngredientsSauce = ingredients.filter(ingredient => ingredient.type === 'sauce');
  const filteredIngredientsMain = ingredients.filter(ingredient => ingredient.type === 'main');
  const [current, setCurrent] = React.useState('rolls');

  return (
    <>
      <div className={`${styles.tabGroup} pt-5`}>
        <Tab value="rolls" active={current === 'rolls'} onClick={() => setCurrent('rolls')}>
          Булки
        </Tab>
        <Tab value="sauces" active={current === 'sauces'} onClick={() => setCurrent('sauces')}>
          Соусы
        </Tab>
        <Tab value="fillings" active={current === 'fillings'} onClick={() => setCurrent('fillings')}>
          Начинки
        </Tab>
      </div>
      <div className={styles.wrapper}>
        <div className="mt-10">
          <h2 className="text text_type_main-medium">Булки</h2> 
          <div className={styles.burgerList}>
            {filteredIngredientsBun.length > 0 ? (
              filteredIngredientsBun.map(ingredient => (
                <BurgerIngredient 
                  key={ingredient._id} 
                  ingredient={ingredient} 
                /> 
              ))
            ) : (
              <p className="text text_type_main-default">Ингредиенты не найдены</p>
            )}
          </div>
        </div>
        <div className="mt-10">
        <h2 className="text text_type_main-medium">Соусы</h2>
          <div className={styles.burgerList}>
            {filteredIngredientsSauce.length > 0 ? (
              filteredIngredientsSauce.map(ingredient => (
                <BurgerIngredient 
                  key={ingredient._id} 
                  ingredient={ingredient} 
                /> 
              ))
            ) : (
              <p className="text text_type_main-default">Ингредиенты не найдены</p>
            )}
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text text_type_main-medium">Начинка</h2>
          <div className={styles.burgerList}>
            {filteredIngredientsMain.length > 0 ? (
              filteredIngredientsMain.map(ingredient => (
                <BurgerIngredient 
                  key={ingredient._id} 
                  ingredient={ingredient} 

                /> 
              ))
            ) : (
              <p className="text text_type_main-default">Ингредиенты не найдены</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    image_large: PropTypes.string,
    price: PropTypes.number
  })).isRequired,
};

export default BurgerIngredients;


