import React from 'react';
import TaskPage from './components/TaskPage';
import { connect } from 'react-redux';
import { EditTask, CreateTask } from './actions/TaskAction';

function App({ tasks, editTask, createTask }) {
  return (
    <div className='App'>
      <TaskPage
        tasks={tasks}
        onStatusChange={editTask}
        onCreateTask={createTask}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
