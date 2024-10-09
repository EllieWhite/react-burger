import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = ({ ingredients }) => {
  return (
    <>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <DragIcon type="primary" className="mr-2" /> 
          <ConstructorElement
            key={ingredient._id}
            type={ingredient.type}
            text={ingredient.name}
            price={ingredient.price}
            thumbnail={ingredient.image}
            className="constructorElement"
          />
        </div>
      ))}
    </>
  );
};

export default BurgerConstructor;