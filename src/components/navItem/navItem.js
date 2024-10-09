import React from 'react';
import styles from './navItem.module.css'; 
function NavItem({ href, iconComponent, text, additionalClass = '' }) {
  return (
    <a href={href} className={`${styles.navItem} pl-5 pr-5 pt-4 pb-4 text text_type_main-default ${additionalClass}`}>
      {iconComponent}
      <p className="ml-2">{text}</p>
    </a>
  );
}

export default NavItem;
