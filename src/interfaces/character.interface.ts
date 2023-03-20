export interface ICharacter {
  id: number;
  name: string;
  gender: string;
  status: string;
  species: string;
  type: string;
  origin: IOrigin;
  location: {
    name: string,
    url: string
  },
  episode: string[];
  image: string;
  url: string;
  created: string;
}

interface IOrigin {
  name: string;
  url: string;
}
