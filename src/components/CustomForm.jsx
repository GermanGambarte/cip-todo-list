import { PlusIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'

export const CustomForm = () => {
  const [task, setTask] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefautl()
    setTask('')
  }

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          autoFocus
          required
          className="input"
          id="task"
          maxLength={60}
          placeholder="Enter Task"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <label className="label" htmlFor="task">
          Enter Task
        </label>
      </div>
      <button aria-label="Add Task" className="btn" type="submit">
        <PlusIcon />
      </button>
    </form>
  )
}
