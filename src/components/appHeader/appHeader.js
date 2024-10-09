import styles from './appHeader.module.css'; 
import Nav from '../nav/nav'

function AppHeader() {
  return (
    <header className={`${styles.header} p-4`}>
      <Nav />
    </header>

  )
};

export default AppHeader;
