import { REGISTER } from './constants';

export const register = key => dispatch => {
  dispatch({
    type: REGISTER,
    key: key,
  });
};
