export const getFirstLetter = (str: string) => {
  return str.charAt(0);
};

export const getLetterCode = (str: string) => {
  return str.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
};
