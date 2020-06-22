import React, { useState } from 'react';
import TaskList from './TaskList';

const TASK_STATUSES = ['Todo', 'In Progress', 'Completed'];

const TaskPage = ({ tasks }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const toggleForm = () => setShowForm(!showForm);

  const renderTaskLists = () => {
    return TASK_STATUSES.map((status, idx) => {
      const statusTasks = tasks.filter((task) => task.status === status);
      return (
        <div className='col-md-3 card m-3 p-0'>
          <TaskList key={idx} status={status} tasks={statusTasks} />
        </div>
      );
    });
  };

  return (
    <div className='container my-5'>
      <div className='jumbotron py-3'>
        <div className='row'>
          <div className='col-md-2'>
            <button className='btn btn-success m-3' onClick={toggleForm}>
              +
            </button>
          </div>
          <div className='col-md-9 '>
            <h2 className='display-4 text-center'>Task Manager</h2>
          </div>
        </div>
        {showForm && (
          <form>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <textarea
                type='text'
                className='form-control'
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type='submit' className='btn btn-warning'>
              Submit
            </button>
          </form>
        )}
      </div>
      <div
        className='row d-flex justify-content-center position-relative pt-3'
        style={{ background: '#e9ecef' }}
      >
        {renderTaskLists()}
      </div>
    </div>
  );
};

export default TaskPage;
