const initialState = [
  {
    id: 1,
    title: 'Learn React',
    description: "It's a fantastic UI library",
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Learn Redux',
    description: 'A popular state management library',
    status: 'Todo',
  },
  {
    id: 3,
    title: 'Learn MERN',
    description: 'Full Stack development',
    status: 'Completed',
  },
];

export default (state = { tasks: initialState }, action) => {
  if (action.type === 'EDIT TASK') {
    return {
      tasks: state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            ...action.payload.params,
          };
        }
        return task;
      }),
    };
  }
  return state;
};
