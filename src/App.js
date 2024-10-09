import AppHeader from './components/appHeader/appHeader';
import BurgerIngredients from './components/burgerIngredients/burgerIngredients';
import BurgerConstructor from './components/burgerConstructor/burgerConstructor';
import stylesConstructorPage from './components/constructorPage/constructorPage.module.css';
import stylesBurgerConstructor from './components/burgerConstructor/burgerConstructor.module.css'; 
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Total from './components/total/total';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from './components/modalOverlay/modalOverlay';
import Modal from './components/modal/modal';
import OrderDetails from './components/orderDetails/orderDetails';

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const { data } = await response.json();
        setIngredients(data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchIngredients();
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleIngredientClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <AppHeader />
      <main className="main">
        <div className={stylesConstructorPage.content}>
          <div className={`${stylesConstructorPage.burgerBox} pt-10`}>
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <BurgerIngredients ingredients={ingredients} />
          </div>
        
          <div className={stylesBurgerConstructor.burgerConstructorBox}>
            <div className={`${stylesBurgerConstructor.constructorList} mt-25`}>
              <BurgerConstructor ingredients={ingredients} />
            </div>
            <div className={`${stylesBurgerConstructor.burgerTotalBox} pt-10`}>
              <Total />
              <Button htmlType="button" type="primary" size="medium" onClick={handleIngredientClick}>
                Оформить заказ
              </Button>
            </div>
          </div>
        </div>
      </main>
      <ModalOverlay isOpen={showModal} onClose={closeModal}>
        <Modal onClick={closeModal} moreClasses={`pt-30 pb-30`}>
          <OrderDetails />
        </Modal>
      </ModalOverlay>
    </div>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    image: PropTypes.string
  })).isRequired
};

export default App;
