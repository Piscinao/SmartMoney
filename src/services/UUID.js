export const getUUID = () => {
  const {v1: uuidv1} = require('uuid');
  return uuidv1();
};
