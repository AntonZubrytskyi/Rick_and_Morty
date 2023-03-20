import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetails from '../../components/CharacterDetails/CharacterDetails';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCharacterById } from '../../redux/slices/characters/asyncActions';
import { commonHelper } from '../../helpers';

const CharacterDetailsPage = () => {
  const { characterDetails, error } = useAppSelector((state) => state.charactersReducer);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getCharacterById({ id }));
    commonHelper.scrollToUp();
  }, [id]);

  if (error) {
    return <h2>Character Not Found</h2>;
  }
  return (
    <CharacterDetails data={characterDetails} />
  );
};

export default CharacterDetailsPage;
