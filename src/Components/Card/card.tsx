import React from 'react'
import { Link, useHistory } from 'react-router-dom'

interface TodosProps {
  todos: {
    id: number,
    content: string
  }[],
  setTodo: React.Dispatch<React.SetStateAction<{
    id: number;
    content: string;
  }[]>>
}


export const Card: React.FC<TodosProps> = (props: TodosProps) => {
  const history = useHistory()
  const { todos, setTodo } = props

  const deleteItem = async (id: any) => {
    const data = await fetch(`/api/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        id: id
      })
    })

    const res = await data.json()
    console.log(res)

    history.push('/')

    const todos = await fetch('/api')
    if (todos.ok) {
      const res = await todos.json()
      setTodo(res)
    }
  }

  return <div>
    {todos.map(item => <li key={item.id}><Link to={`${item.id}`}>{item.content}</Link><button onClick={() => deleteItem(item.id)}>Delete</button></li>)}
  </div>
}
