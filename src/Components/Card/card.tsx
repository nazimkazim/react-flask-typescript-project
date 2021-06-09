import React from 'react'
import { Link } from 'react-router-dom'

interface TodosProps {
  todos: {
    id: number,
    content: string
  }[],
  deleteItem: any,
  setOpenUpdateDialog: any,
  setChosenTask: any
}


export const Card: React.FC<TodosProps> = (props: TodosProps) => {
  const { todos, deleteItem, setOpenUpdateDialog, setChosenTask } = props

  const handleUpdate = (id: number) => {
    const task = todos.find(item => item.id === id)
    setChosenTask(task)
    console.log(id)
    setOpenUpdateDialog(true)
  }

  return <div>
    {todos && todos.map(item =>
      <li key={item.id}>
        <Link to={`${item.id}`}>{item.content}</Link>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
        <button onClick={() => handleUpdate(item.id)}>Update</button>
      </li>)}
  </div>
}
