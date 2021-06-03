import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

interface Todos {
  todos: {
    id: number,
    content: string
  }[]
}

function Show() {
  const { id }: any = useParams()
  const [chosenTodo, setChosenTodo] = useState<Todos["todos"]>([])

  useEffect(() => {
    const getItemById = async () => {
      const data = await fetch(`/api/${id}`)
      const res = await data.json()
      setChosenTodo(res)
    }
    getItemById()
  }, [id])
  console.log(chosenTodo)
  return (
    <div>
      {chosenTodo.length > 0 && chosenTodo.map(item => <div key={item.id}>{item.content}</div>)}
    </div>
  )
}

export default Show
