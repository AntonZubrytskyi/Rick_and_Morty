import _ from 'lodash';
import { ICharacter } from '../interfaces';

const useSort = (array: ICharacter[], sortBy: string): ICharacter[] => _.sortBy(array, sortBy);

export {
  useSort,
};
