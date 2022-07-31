const validateObject = (object) => {
  let count = 0;
  Object.keys(object).map((keys) => {
    let item = object[keys];
    if (typeof item == "object") {
      let _c = validateObject(item);
      count = count + _c;
    }
    if (typeof item == "string") {
      if (item === "") count++;
    }
  });
  return count;
};

export { validateObject };
