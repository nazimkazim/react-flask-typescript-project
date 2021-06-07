import React, { useState, useEffect, Fragment } from 'react';
import { Card } from '../Components/Card/card';
import Form from '../Components/Form/form';

/* interface ParentStateItem {
  todo: Array
} */

interface Todos {
  todos: {
    id: number,
    content: string
  }[]
}

interface UserInput {
  content: string
}


export const TodoPage = () => {
  const [todo, setTodo] = useState<Todos["todos"]>([])
  const [addTodo, setAddTodo] = useState<UserInput["content"]>("")

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('/api')
      if (data.ok) {
        const res = await data.json()
        setTodo(res)
      }
    }
    getData()
  }, [])

  const handleFormChange = (inputValue: string) => {
    setAddTodo(inputValue)
  }

  return (
    <Fragment>
      <Form content={addTodo} onFromChange={handleFormChange} setAddTodo={setAddTodo} setTodo={setTodo} />
      <Card todos={todo} setTodo={setTodo} />
    </Fragment>

  );
};