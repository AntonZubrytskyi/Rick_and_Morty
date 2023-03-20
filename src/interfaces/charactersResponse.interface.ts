import { ICharacter } from './character.interface';

export interface ICharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  },
  results: ICharacter[];
}
