import React, { FC } from 'react';
import styles from './CharacterDetailsItem.module.scss';

interface IDetailsItemProps {
  title: string;
  value: string;
}
const CharacterDetailsItem: FC<IDetailsItemProps> = ({ title, value }) => {
  const valueText = value === '' ? 'Unknown' : value;
  return (
    <div className={styles.details__item__container}>
      <span className={styles.details__item__title}>{title}</span>
      <span className={styles.details__item__value}>{valueText}</span>
    </div>
  );
};
export default CharacterDetailsItem;
