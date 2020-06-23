import { EDIT_TASK } from './types';

export const EditTask = (id, params = {}) => {
  return {
    type: EDIT_TASK,
    payload: {
      id,
      params,
    },
  };
};
