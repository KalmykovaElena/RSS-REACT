import { DataItem } from '../components/types';

export const transformData = (data: DataItem[]) => {
  return data?.map((e) => {
    const obj = {
      id: extractId(e.url),
      name: e.name,
      img: '',
    };
    obj.img = `https://starwars-visualguide.com/assets/img/characters/${obj.id}.jpg`;
    // getData(e.homeworld).then((r) => (obj.homeworld = r));

    return obj;
  });
};

function extractId(url: string) {
  const regExp = /\/([0-9]*)\/$/;
  return url.match(regExp)![1];
}
export const transformModalData = (data: DataItem) => {
  const obj = {
    Name: data.name,
    Birth_year: data.birth_year,
    Height: data.height,
    Mass: data.mass,
    Gender: data.gender,
    Hair_color: data.hair_color,
    Skin_color: data.skin_color,
  };
  return obj;
};

function getData(url: string) {
  const result = fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.name;
    });

  return result;
}
