const upperCase = params => {
  return params.toUpperCase();
};

const firstLetterUpperCase = params => {
  return params.at(0).toUpperCase() + params.slice(1);
};

export { upperCase, firstLetterUpperCase };
