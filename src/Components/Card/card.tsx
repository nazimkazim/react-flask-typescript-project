import React from 'react'
import { Link } from 'react-router-dom'
interface TodosProps {
  todos: {
    id: number,
    content: string
  }[]
}


export const Card: React.FC<TodosProps> = (props: TodosProps) => {
  const { todos } = props

  const deleteItem = (id: any) => {
    fetch(`/api/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        id: id
      })
    })
    
  }

  return <div>
    {todos.map(item => <li key={item.id}><Link to={`${item.id}`}>{item.content}</Link><button onClick={() => deleteItem(item.id)}>Delete</button></li>)}
  </div>
}