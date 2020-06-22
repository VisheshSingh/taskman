import React from 'react';

const Task = ({ task: { title, description } }) => {
  return (
    <div>
      <h3 className='card-title text-center mt-3 text-success'>{title}</h3>
      <p className='card-text  text-center mb-2 px-2 text-muted'>
        {description}
      </p>
    </div>
  );
};

export default Task;
