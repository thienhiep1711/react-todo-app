import React from 'react';

const TodoForm = ({addTodo}) => {
  let input;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="text" className="form-control" placeholder="Text message"
            ref={node => {
              input = node;
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => {
          addTodo(input.value);
          input.value = '';
        }}>Submit</button>
      </form>
    );
}

export default TodoForm;