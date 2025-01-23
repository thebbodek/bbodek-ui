export const replaceSpace = (str: string) => str.replaceAll(' ', '');

export const parseSearch = (str: string) => {
  return replaceSpace(str).toLowerCase();
};

export const filterSearch = ({
  str,
  keyword,
}: {
  str: string;
  keyword: string;
}) => {
  return parseSearch(str).includes(parseSearch(keyword));
};
