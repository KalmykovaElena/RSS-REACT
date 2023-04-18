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
