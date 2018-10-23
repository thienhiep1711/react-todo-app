import React, { Component } from 'react';
import TodoApp from './pages/TodoApp';
import './assets/scss/main.scss';
import './assets/scss/components/_todoapp.scss';
class App extends Component {
  render() {
    return (
      <div className="app-wrap">
        <div className="container">
            <TodoApp />
        </div>
      </div>
    );
  }
}

export default App;
