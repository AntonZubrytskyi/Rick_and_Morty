import { axiosService, Response } from './axios.service';
import { urls } from '../constants';
import { ICharacter, ICharactersResponse, IQueryParams } from '../interfaces';

const charactersService = {
  getAll: (
    params: Partial<IQueryParams>,
  ): Response<ICharactersResponse> => axiosService.get(urls.character, { params: { ...params } }),
  getById: (
    id: string | undefined,
  ): Response<ICharacter> => axiosService.get(`${urls.character}/${id}`),
};

export {
  charactersService,
};
