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
  collection: string;
  category: string;
  metal: string;
  rating: string;
  color: string;
  year: number;
  price: number;
  stock: number;
  description: string;
}

export interface CardProps {
  data: Item[];
  searchValue: string;
}
