import { EDIT_TASK, CREATE_TASK } from './types';

export const EditTask = (id, params = {}) => {
  return {
    type: EDIT_TASK,
    payload: {
      id,
      params,
    },
  };
};

export const CreateTask = (title, description) => {
  return {
    type: CREATE_TASK,
    payload: {
      id: Math.floor(1 + Math.random() * 100000),
      title,
      description,
      status: 'Todo',
    },
  };
};
