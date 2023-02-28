export const required = (value: string) => {
  if (value) {
    return undefined;
  } else return "Filed is requared";
};

export const maxLengthCreator = (maxLength: number) => (value: string) => {
  if (value.length > maxLength) return `max length is ${maxLength} symbols`;
  return undefined;
};
