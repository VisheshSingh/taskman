import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, status }) => {
  return (
    <div>
      <div className='card-header text-uppercase text-center font-weight-bold'>
        {status}
      </div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
