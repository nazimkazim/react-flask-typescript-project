import React from 'react'
import { Link } from 'react-router-dom'

interface TodosProps {
  todos: {
    id: number,
    content: string
  }[],
  deleteItem: any
}


export const Card: React.FC<TodosProps> = (props: TodosProps) => {
  const { todos, deleteItem } = props



  return <div>
    {todos && todos.map(item => <li key={item.id}><Link to={`${item.id}`}>{item.content}</Link><button onClick={() => deleteItem(item.id)}>Delete</button></li>)}
  </div>
}
