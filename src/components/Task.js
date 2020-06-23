import React from 'react';
import { TASK_STATUSES } from './TaskPage';

const Task = ({
  task: { id, title, description, status },
  onStatusChange,
  onRemoveTask,
}) => {
  const handleSubmit = (e) => {
    onStatusChange(id, e.target.value);
  };

  return (
    <div>
      <form onChange={handleSubmit}>
        <select defaultValue={status} className='dropdown'>
          {TASK_STATUSES.map((stat) => (
            <option value={stat} key={stat}>
              {stat}
            </option>
          ))}
        </select>
      </form>
      <h3 className='card-title text-center mt-3 text-success'>{title}</h3>
      <p className='card-text  text-center mb-2 px-2 text-muted'>
        {description}
      </p>
      <button
        className='btn btn-danger float-right m-2'
        onClick={() => onRemoveTask(id)}
      >
        &times;
      </button>
    </div>
  );
};

export default Task;
