import moment from "moment";


export const upperCase = str => str?.toString().toUpperCase() || "";

export const lowerCase = str => str?.toString().toLowerCase() || "";

export const firstLetterUpperCase = str =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

export const startsWithMethod = (str = "", value = "") =>
  str.startsWith(value);

export const endsWithMethod = (str = "", value = "") =>
  str.endsWith(value);

export const replaceMethod = (str = "", oldValue, newValue) =>
  str.replace(oldValue, newValue);

export const replaceAllMethod = (str = "", oldValue, newValue) =>
  str.replaceAll(oldValue, newValue);

export const trimMethod = (str = "") => str.trim();

export const splitMethod = (str = "", separator = "") =>
  str.split(separator);

export const repeatMethod = (str = "", count = 1) =>
  str.repeat(Number(count));

export const includesMethod = (value, search) =>
  value?.includes(search);

export const lengthMethod = value =>
  value?.length ?? 0;

export const filterMethod = (
  data = [],
  key,
  value,
  type
) => {
  if (!Array.isArray(data)) return [];



  return data.filter(item =>
  type=="not"?item?.[key]!==value:item?.[key]===value
  );
};

export const findMethod = (data = [], key, value) =>
  data.find(item => item[key] === value);

export const findIndexMethod = (data = [], key, value) =>
  data.findIndex(item => item[key] === value);

export const findLastIndexMethod = (data = [], key, value) =>
  data.findLastIndex(item => item[key] === value);

export const someMethod = (data = [], key, value) =>
  data.some(item => item[key] === value);

export const everyMethod = (data = [], key, value) =>
  data.every(item => item[key] === value);

export const sliceMethod = (data = [], end = 0) =>
  data.slice(0, Number(end));

export const atMethod = (data = [], index = 0) =>
  data.at(Number(index));

export const withMethod = (data = [], index, value) =>
  data.with(index, value);

export const toSortedMethod = (data = []) =>
  data.toSorted();

export const flatMethod = (data = []) =>
  data.flat(Infinity);

export const setMethod = (data = []) =>
  [...new Set(data)];

export const groupByMethod = (data = [], key) =>
  Object.groupBy(data, item => item[key]);

export const reduceMethod = (data = [], key) => {
  if (!Array.isArray(data)) return 0;

  return key
    ? data.reduce((sum, item) => sum + (Number(item[key]) || 0), 0)
    : data.reduce((sum, item) => sum + (Number(item) || 0), 0);
};

export const arrayFromMethod = count =>
  Array.from({ length: Number(count) }, () => "");

/* ===========================
   OBJECT METHODS
=========================== */

export const objectMethods = (
  obj = {},
  type = "values"
) => {
  switch (type) {
    case "keys":
      return Object.keys(obj);

    case "values":
      return Object.values(obj);

    case "entries":
      return Object.entries(obj);

    default:
      return [];
  }
};

/* ===========================
   MATH METHODS
=========================== */

export const maxMethod = data =>
  Math.max(...data);

export const minMethod = data =>
  Math.min(...data);

export const randomNoMethod = max =>
  Math.floor(Math.random() * Number(max));

/* ===========================
   TYPE
=========================== */

export const typeOfMethod = value =>
  typeof value;



export const timeFormate = date =>
  moment(date).format("LT");

export const dateFormat = date =>
  moment(date).format("DD-MM-YYYY");

export const dateTimeFormat = date =>
  moment(date).format("DD-MM-YYYY hh:mm A");