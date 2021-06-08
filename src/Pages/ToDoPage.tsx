import React, { useState, useEffect, Fragment } from 'react';
import { Card } from '../Components/Card/card';
import Form from '../Components/Form/form';
import { getTodos, deleteItem, postTodos } from '../actions/todos'
import { connect } from 'react-redux';

/* interface ParentStateItem {
  todo: Array
} */

interface Todos {
  todos: {
    id: number,
    content: string
  }[],
  getTodos: any,
  deleteItem: any,
  postTodos: any
}

interface UserInput {
  content: string
}


const TodoPage: React.FC<Todos> = ({ todos, getTodos, deleteItem, postTodos }) => {
  const [addTodo, setAddTodo] = useState<UserInput["content"]>("")

  useEffect(() => {
    getTodos()
  }, [getTodos])

  console.log(todos)

  const handleFormChange = (inputValue: string) => {
    setAddTodo(inputValue)
  }

  return (
    <Fragment>
      <Form
        content={addTodo}
        onFromChange={handleFormChange}
        setAddTodo={setAddTodo}
        postTodos={postTodos}
        getTodos={getTodos}
      />
      <Card todos={todos} deleteItem={deleteItem} />
    </Fragment>

  );
};

const mapStateToProps = (state: { todoReducer: { todos: []; }; }) => ({
  todos: state.todoReducer.todos
})

export default connect(mapStateToProps, { getTodos, deleteItem, postTodos })(TodoPage)