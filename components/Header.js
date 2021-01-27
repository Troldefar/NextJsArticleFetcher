import Head from 'next/head';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        Header
      </h1>
    </div>
  )
}

export default Header
