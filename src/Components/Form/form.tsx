import React, { Dispatch, SetStateAction } from 'react'

interface UserInput {
  content: string,
  onFromChange: any,
  setAddTodo: Dispatch<SetStateAction<string>>,
  setTodo: Dispatch<SetStateAction<{ id: number; content: string; }[]>>
}




const Form: React.FC<UserInput> = (props: UserInput) => {
  const { content, onFromChange, setAddTodo, setTodo } = props

  const handleChange = (event: { target: { value: string } }) => {
    onFromChange(event.target.value)
  }

  console.log(content)

  const getData = async () => {
    const data = await fetch('/api')
    if (data.ok) {
      const res = await data.json()
      setTodo(res)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = await fetch('/api/create', {
      method: 'POST',
      body: JSON.stringify({
        content
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    await getData()
    const res = await data.json()
    const message = await res
    setAddTodo('')
    return message
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={content} onChange={handleChange} />
      <input type="submit" />
    </form>
  )
}

export default Form
