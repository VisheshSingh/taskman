import React from 'react';
import TaskPage from './components/TaskPage';
import { connect } from 'react-redux';

function App({ tasks }) {
  return (
    <div className='App'>
      <TaskPage tasks={tasks} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};

export default connect(mapStateToProps)(App);
