import React, { useState, useEffect, Fragment } from 'react';
import { Card } from '../Components/Card/card';
import Form from '../Components/Form/form';
import { getTodos, deleteItem, postTodos, updateItem } from '../actions/todos'
import { connect } from 'react-redux';
import Dialog from '../Components/Dialog'

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
  postTodos: any,
  updateItem: any
}

interface UserInput {
  content: string
}


const TodoPage: React.FC<Todos> = ({ todos, getTodos, deleteItem, postTodos, updateItem }) => {
  const [addTodo, setAddTodo] = useState<UserInput["content"]>("");
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const [chosenTask, setChosenTask] = useState('')

  useEffect(() => {
    getTodos()
  }, [getTodos])

  const handleFormChange = (inputValue: string) => {
    setAddTodo(inputValue)
  }

  return (
    <Fragment>
      <Dialog
        openUpdateDialog={openUpdateDialog}
        setOpenUpdateDialog={setOpenUpdateDialog}
        chosenTask={chosenTask}
        setAddTodo={setAddTodo}
        addTodo={addTodo}
        updateItem={updateItem}
      />
      <Form
        content={addTodo}
        onFromChange={handleFormChange}
        setAddTodo={setAddTodo}
        postTodos={postTodos}
        getTodos={getTodos}
      />
      <Card
        todos={todos}
        deleteItem={deleteItem}
        setOpenUpdateDialog={setOpenUpdateDialog}
        setChosenTask={setChosenTask}
      />
    </Fragment>

  );
};

const mapStateToProps = (state: { todoReducer: { todos: []; }; }) => ({
  todos: state.todoReducer.todos
})

export default connect(mapStateToProps, { getTodos, deleteItem, postTodos, updateItem })(TodoPage)