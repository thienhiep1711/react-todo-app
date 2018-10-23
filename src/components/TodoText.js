import React from 'react';

const TodoText = ({item, remove}) => {
  console.log(item)
  return (
    <div className="todo__item">
        <div className="alert alert-primary" role="alert">
          {item.text}
        </div>
        <button type="button" className="btn btn-warning" >Edit</button>
        <button type="button" className="btn btn-danger">Remove</button>
      </div>
  );
}

export default TodoText;