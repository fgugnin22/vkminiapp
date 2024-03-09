export const validateInput = (value: string) => {
  const regex = /^[a-zA-Zа-яА-Я]$/;
  if (!regex.test(value.at(-1) ?? "0") && value.length > 0) {
    return null;
  }
  return value;
};
