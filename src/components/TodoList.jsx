import React, { useState } from 'react';
import Todo from './Todo';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const [todos] = useContext(TodoContext);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.length > 0 ? (
          todos.map((item) => (
            <Todo
              key={item.id}
              id={item.id}
              title={item.title}
              completed={item.completed}
            />
          ))
        ) : (
          <h4>It is blank, I think you should add something to it...</h4>
        )}
      </ul>
    </div>
  );
};

export default TodoList;