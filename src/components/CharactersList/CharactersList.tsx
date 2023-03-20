import React, { FC } from 'react';
import { useAppSelector, useSort } from '../../hooks';
import styles from './CharactersList.module.scss';
import CharacterItem from '../CharacterItem/CharacterItem';

const CharactersList: FC = () => {
  const { characters, totalCount } = useAppSelector((state) => state.charactersReducer);

  const sortedCharacters = useSort(characters, 'name');

  return (
    <div className={styles.list__container}>
      {
            sortedCharacters.map((character) => {
              const {
                id, image, name, species,
              } = character;
              return (
                <CharacterItem
                  key={id}
                  id={id}
                  image={image}
                  name={name}
                  species={species}
                  totalCount={totalCount}
                />
              );
            })
        }
    </div>
  );
};

export default CharactersList;
