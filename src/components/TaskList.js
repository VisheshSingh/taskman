import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, status, onStatusChange }) => {
  return (
    <div>
      <div className='card-header text-uppercase text-center font-weight-bold'>
        {status}
      </div>
      {tasks &&
        tasks.map((task) => (
          <Task key={task.id} task={task} onStatusChange={onStatusChange} />
        ))}
    </div>
  );
};

export default TaskList;
