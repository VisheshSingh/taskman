import React from 'react';
import TaskPage from './components/TaskPage';
import { connect } from 'react-redux';
import { EditTask } from './actions/TaskAction';

function App({ tasks, editTask }) {
  console.log(tasks);
  return (
    <div className='App'>
      <TaskPage tasks={tasks} onStatusChange={editTask} />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
