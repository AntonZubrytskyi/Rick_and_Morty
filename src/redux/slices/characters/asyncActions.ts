import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICharactersResponse, ICharacter, IQueryParams } from '../../../interfaces';
import { charactersService } from '../../../services';

const getAllCharacters = createAsyncThunk<ICharactersResponse,
{ params: Partial<IQueryParams> }, { rejectValue: string }>(
  'charactersSlice/searchAll',
  async ({ params }, { rejectWithValue }) => {
    try {
      const { data } = await charactersService.getAll(params);
      return data;
    } catch (error:any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

const getCharacterById = createAsyncThunk<ICharacter,
{ id: string | undefined }, { rejectValue: string }>(
  'charactersSlice/searchById',
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await charactersService.getById(id);
      return data;
    } catch (error:any) {
      return rejectWithValue(error.response.status);
    }
  },
);
export {
  getAllCharacters,
  getCharacterById,
};
