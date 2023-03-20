import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CharacterItem.module.scss';
import { urls } from '../../constants';

interface ICharacterItemProps {
  id: number;
  image: string;
  name: string;
  species: string;
}

const CharacterItem: FC<ICharacterItemProps> = ({
  id, image, name, species,
}) => {
  const navigate = useNavigate();

  const detailsRedirect = () => {
    navigate(`${urls.character}/${id}`);
  };
  return (
    <div
      className={styles.item__container}
      role="button"
      tabIndex={0}
      onClick={detailsRedirect}
      onKeyDown={detailsRedirect}
    >
      <img className={styles.item__image} src={image} alt="character" />
      <div className={styles.item__text__wrapper}>
        <span className={styles.item__name}>{name}</span>
        <span className={styles.item__species}>{species}</span>
      </div>
    </div>
  );
};

export default CharacterItem;
