import React, { FC } from 'react';
import styles from './Header.module.scss';
import { ReactComponent as RickMortyImage } from '../../assets/images/RickMorty.svg';

const Header: FC = () => (
  <div className={styles.search__container}>
    <RickMortyImage className={styles.search__image} />
  </div>
);

export default Header;
