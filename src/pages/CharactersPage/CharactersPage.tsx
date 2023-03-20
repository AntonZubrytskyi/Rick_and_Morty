import React, { ChangeEvent, useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import CharactersList from '../../components/CharactersList/CharactersList';
import Header from '../../components/Header/Header';
import { Pagination } from '../../components/Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { commonHelper, localStorageHelper } from '../../helpers';
import { getAllCharacters } from '../../redux/slices/characters/asyncActions';
import styles from './CharactersPage.module.scss';

const CharactersPage = () => {
  const { page, name } = localStorageHelper.getFromLocalStorage('params');

  const {
    pages, totalCount,
  } = useAppSelector((state) => state.charactersReducer);

  const [currentPage, setCurrentPage] = useState<number>(page || 1);
  const [searchValue, setSearchValue] = useState<string>(name || '');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchValue(value);
    setCurrentPage(1);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    const params = {
      page: currentPage || 1,
      name: searchValue || '',
    };

    dispatch(getAllCharacters({ params }));
  }, [searchValue, currentPage]);

  useEffect(() => {
    commonHelper.scrollToUp();
  }, [currentPage]);

  return (
    <>
      <Header />
      <Search searchValue={searchValue} setSearchValue={handleSearch} placeholder="Filter by name..." />
      {!totalCount && <h3 className={styles.text}>Character Not Found</h3>}
      <CharactersList />
      {!!totalCount
                && <Pagination totalPages={pages} page={currentPage} setPage={setCurrentPage} />}
    </>
  );
};

export default CharactersPage;
