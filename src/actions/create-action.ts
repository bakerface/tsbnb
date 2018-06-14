export const createAction = (type: string) => ({
  FAILURE: `${type}_FAILURE`,
  REQUEST: `${type}_REQUEST`,
  SUCCESS: `${type}_SUCCESS`
});
