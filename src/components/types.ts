export interface HeaderProps {
  location: { pathname: string };
}
export interface SearchProps {
  initialValue: string;
}
export interface Item {
  id: string;
  name: string;
  img: string;
}
export interface DataItem {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface ApiData {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: DataItem[];
  };
}
export interface SubmitFormItem {
  id: number;
  name?: string;
  lastName?: string;
  birthday?: string;
  gender?: string;
  aducation?: string;
  file?: string;
  country?: string;
  checkbox?: string;
}

export type FormError = {
  [key: string]: string; // 👈️ variable key
};
