export const checkEmptyOrNull = (value) =>
  value === null ? true : value === "" ? true : value == [] ? true : false;

export default checkEmptyOrNull;
