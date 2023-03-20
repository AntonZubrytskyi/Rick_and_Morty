import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CharacterDetails.module.scss';
import CharacterDetailsItem from '../CharacterDetailsItem/CharacterDetailsItem';
import { ICharacter } from '../../interfaces';
import Button from '../UI/Button/Button';
import { ReactComponent as ArrowBack } from '../../assets/icons/ArrowBack.svg';

interface ICharactersDetailsProps {
  data: ICharacter
}

const CharacterDetails: FC<ICharactersDetailsProps> = ({ data }) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className={styles.details__container}>
      <Button styleClass="btn__go-back" onClick={goBack} icon={<ArrowBack />} label="Go Back" />
      <img className={styles.details__image} src={data.image} alt={data.name} />
      <h3 className={styles.details__name}>{data.name}</h3>
      <p className={styles.details__header}>Information</p>
      <div className={styles.details__box}>
        <CharacterDetailsItem title="Gender" value={data.gender} />
        <CharacterDetailsItem title="Status" value={data.status} />
        <CharacterDetailsItem title="Specie" value={data.species} />
        <CharacterDetailsItem title="Origin" value={data.origin?.name} />
        <CharacterDetailsItem title="Type" value={data.type} />
      </div>
    </div>
  );
};

export default CharacterDetails;
