import React, { Component } from 'react';
import TodoTitle from '../components/TodoTitle';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import axios from 'axios';

window.id = 0;
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.apiUrl = 'http://www.mocky.io/v2/5bce8c203300006b00c244ce'
  }

  componentDidMount() {
    axios.get(this.apiUrl)
      .then((res) => {
        this.setState({data:res.data})
      })
  }

  addTodo(val) {
    const  todo = {
      text: val
    }
    axios.post(this.apiUrl, todo)
      .then((res) => {
        this.state.data.push(res.data);
        this.setState({data: this.state.data})
      })
  }

   handleRemove(id) {
     const remainder = this.state.data.filter((todo) => {
       if(todo.id !== id) return todo;
     })
     axios.delete(this.apiUrl+'/'+id)
      .then((res) => {
        this.setState({data: remainder});
      })
   }

  render() {
    return (
      <div className="todo__wrap">
      <TodoTitle />
      <div className="todo__form">
        <div className="row">
          <div className="col-sm-6">
            <TodoForm 
              addTodo={this.addTodo.bind(this)}
            />
          </div>
          <div className="col-sm-6">
            <TodoList 
              todos={this.state.data}
              remove={this.handleRemove.bind(this)}
            />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default TodoApp;