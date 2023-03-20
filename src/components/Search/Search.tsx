import React, { ChangeEvent, FC } from 'react';
import styles from './Search.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/SearchIcon.svg';

interface ISearchProps {
  searchValue: string,
  setSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string
}

const Search: FC<ISearchProps> = ({ searchValue, setSearchValue, placeholder }) => (
  <div className={styles.search__wrapper}>
    <div className={styles.search__container}>
      <SearchIcon className={styles.searchIcon} />
      <input
        type="search"
        value={searchValue}
        className={styles.search__input}
        onChange={(event) => setSearchValue(event)}
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default Search;
