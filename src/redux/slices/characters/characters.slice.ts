import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllCharacters, getCharacterById } from './asyncActions';
import { ICharacter, ICharactersResponse } from '../../../interfaces';

interface ICharactersSliceState {
  characters: ICharacter[],
  characterDetails: ICharacter,
  error: string | null,
  status: string,
  totalCount: number,
  pages: number,
  page:number,
  name:string
}

const initialState: ICharactersSliceState = {
  characters: [],
  characterDetails: {} as ICharacter,
  totalCount: 0,
  pages: 1,
  error: null,
  status: '',

  page: 1,
  name: '',
};

const charactersSlice = createSlice({
  name: 'charactersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharacters.pending, (state) => {
        state.error = null;
        state.status = 'loading';
      })
      .addCase(getAllCharacters.fulfilled, (state, action:PayloadAction<ICharactersResponse>) => {
        const { info, results } = action.payload;
        state.error = null;
        state.status = 'success';
        state.totalCount = info.count;
        state.characters = results;
        state.pages = info.pages;
      })
      .addCase(getAllCharacters.rejected, (state, { payload }) => {
        if (payload) {
          state.error = payload;
          state.characters = [];
          state.totalCount = 0;
        }
      })
      .addCase(getCharacterById.pending, (state) => {
        state.error = null;
        state.status = 'loading';
      })
      .addCase(getCharacterById.fulfilled, (state, action:PayloadAction<ICharacter>) => {
        const data = action.payload;
        state.error = null;
        state.status = 'success';
        state.characterDetails = data;
      })
      .addCase(getCharacterById.rejected, (state, { payload }) => {
        if (payload) {
          state.error = payload;
          state.characters = [];
        }
      });
  },
});

const {
  reducer: charactersReducer,
} = charactersSlice;

export {
  charactersReducer,
};
