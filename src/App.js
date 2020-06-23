import React from 'react';
import TaskPage from './components/TaskPage';
import { connect } from 'react-redux';
import { EditTask, CreateTask, RemoveTask } from './actions/TaskAction';
import './style.css';

function App({ tasks, editTask, createTask, removeTask }) {
  return (
    <div className='App'>
      <TaskPage
        tasks={tasks}
        onStatusChange={editTask}
        onCreateTask={createTask}
        onRemoveTask={removeTask}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editTask: (id, status) => dispatch(EditTask(id, { status })),
    createTask: (title, description) =>
      dispatch(CreateTask(title, description)),
    removeTask: (id) => dispatch(RemoveTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
