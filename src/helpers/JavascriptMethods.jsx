import moment from "moment";

const upperCase = params => {
  return params.toUpperCase();
};

const lowerCase = params => {
  return params.toLowerCase();
};
const firstLetterUpperCase = params => {
  if(params)
  {
    
    return params.at(0).toUpperCase() + params.slice(1);
  }
};

const filterMethod = (data, key, name) => {
  return data.filter(item => item[key] == name);
};

const sliceMethod = (data, no) => {
  return data.slice(0, Number(no));
};

const includesMethod = (data, name) => {
  return data.includes(name);
};

const someMethod = (data, key, name) => {
  return data.some(item => item[key] == name);
};

const everyMethod = (data, key, name) => {
  return data.every(item => item[key] == name);
};

const withMethod = (data, index, updateValue) => {
  return data.with(index, updateValue);
};

const tosortedMethod = data => {
  return data.toSorted();
};

const groupbyMethod = (data, key) => {
  return Object.groupBy(data, data => data[key]);
};

const startsWithMethod = (data, name) => {
  return data.startsWith(`${name}`);
};
const endssWithMethod = (data, name) => {
  return data.endsWith(`${name}`);
};

const replaceMethod = (data, replceName, changedName) => {
  return data.replace(replceName, changedName);
};

const replaceAllMethod = (data, replceName, changedName) => {
  return data.replaceAll(replceName, changedName);
};

const atMethod = (data, no) => {
  return data.at(Number(no));
};

const typeofMethod = data => {
  return typeof data;
};

const reduceMethod = (data, key) => {
  if (key) {
    return data.reduce((acc, current) => acc + current[key], 0);
  } else {
    return data.reduce((acc, current) => acc + current, 0);
  }
};

const maxMethod = data => {
  return Math.max(...data);
};
const minMethod = data => {
  return Math.min(...data);
};

const randomnoMethod = (data, no) => {
  return Math.round(Math.random() * Number(no));
};

const flatMethod = data => {
  return data.flat(Infinity);
};

const setMethod = data => {
  return [...new Set(data)];
};

const objectMethods = (data, key) => {
  if (key == "values") {
    return Object.values(data);
  } else if (key == "keys") {
    return Object.keys(data);
  } else {
    Object.entries(data);
  }
};

const findMethod = (data, key, name) => {
  return data.find(item => item[key] == name);
};

const findLastIndexMethod = data => {
  return data.findLastIndexMethod(item => item);
};

const findIndexMethod = (data, key, name) => {
  return data.findindex(item => item[key] == name);
};

const trimMethod = data => {
  return data.trim();
};

const splitMethod = (data, key) => {
  return data.split(`${key}`);
};

const repeatMethod = (data, no) => {
  return data.repeat(Number(no));
};

const lengthMethod = data => {
  return data.length();
};

const arrayFromMethod = no => {
  return Array.from({ length: Number(no) }, () => "");
};

const timeFormate=(data)=>{
  return moment(data).format('LT')
}

export {
  upperCase,
  firstLetterUpperCase,
  filterMethod,
  sliceMethod,
  includesMethod,
  someMethod,
  everyMethod,
  withMethod,
  tosortedMethod,
  groupbyMethod,
  startsWithMethod,
  replaceMethod,
  replaceAllMethod,
  atMethod,
  lowerCase,
  typeofMethod,
  reduceMethod,
  minMethod,
  maxMethod,
  randomnoMethod,
  endssWithMethod,
  flatMethod,
  setMethod,
  objectMethods,
  findMethod,
  findIndexMethod,
  findLastIndexMethod,
  trimMethod,
  splitMethod,
  repeatMethod,
  lengthMethod,
  arrayFromMethod,
  timeFormate
};
