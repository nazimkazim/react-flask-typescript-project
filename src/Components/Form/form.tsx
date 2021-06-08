import React, { Dispatch, SetStateAction } from 'react'

interface UserInput {
  content: string,
  onFromChange: any,
  setAddTodo: Dispatch<SetStateAction<string>>,
  postTodos: any,
  getTodos: any
}

const Form: React.FC<UserInput> = (props: UserInput) => {
  const { content, onFromChange, setAddTodo, postTodos, getTodos } = props

  const handleChange = (event: { target: { value: string } }) => {
    onFromChange(event.target.value)
  }

  console.log(content)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    postTodos(content)
    getTodos()
    setAddTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={content} onChange={handleChange} />
      <input type="submit" />
    </form>
  )
}

export default Form
