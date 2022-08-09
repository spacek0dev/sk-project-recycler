const validateObject = object => {
  let count = 0;
  let errors = [];
  Object.keys(object).map(keys => {
    let item = object[keys];
    if (typeof item == 'object') {
      let _c = validateObject(item);
      count = count + _c;
    }
    if (typeof item == 'string') {
      if (item === '') {
        count++;
        errors.push(keys);
      }
    }
  });
  return {valid: count === 0 ? true : false, keys: errors};
};

export {validateObject};
