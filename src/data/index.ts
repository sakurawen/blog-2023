import data from '@/data/data.json';

const getList = () => {
  return data.list.map((posts) => {
    return {
      ...posts,
    };
  });
};

export const list = getList();
export default list;
