import NavItem from '../navItem/navItem';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './nav.module.css'; 

function Nav() {
    return (
        <nav className={styles.nav}>
            <NavItem
                href="/"
                iconComponent={<BurgerIcon type="primary" />}
                text="Конструктор"
            />
            <NavItem
                href="/"
                iconComponent={<ListIcon type="secondary" />}
                text="Лента заказов"
                additionalClass="ml-2 text_color_inactive"
            />
            <div className={styles.logoWrapper}>
            <Logo />
            </div>
            <NavItem
                href="/"
                iconComponent={<ProfileIcon type="secondary" />}
                text="Личный кабинет"
                additionalClass="text_color_inactive"
            />
        </nav>
    )
} 

export default Nav;