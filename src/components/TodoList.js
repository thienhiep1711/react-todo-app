import React from 'react';
import TodoText from './TodoText';

const TodoList = ({todos, remove}) =>  {

  return (
    <div className="todo__list">
       {
        todos && todos.map((todo) => (
            <TodoText item={todo} key={todo.id} remove={remove} />
         ))
       }
    </div>
  );
}

export default TodoList;