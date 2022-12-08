import { CheckIcon } from '@heroicons/react/solid'
import React, { useState, useEffect } from 'react'

export const EditForm = ({ toEditTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(toEditTask.name)

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === 'Escape' && closeEditMode()
    }

    window.addEventListener('keydown', closeModalIfEscaped)

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [closeEditMode])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    updateTask({ ...toEditTask, name: updatedTaskName })
  }

  return (
    <div
      aria-labelledby="editTask"
      role="dialog"
      onClick={(e) => e.target === e.currentTarget && closeEditMode()}
    >
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            autoFocus
            required
            className="input"
            id="editTask"
            maxLength={60}
            placeholder="Update Task"
            type="text"
            value={updatedTaskName}
            onChange={(e) => setUpdatedTaskName(e.target.value)}
          />
          <label className="label" htmlFor="editTask">
            Update Task
          </label>
        </div>
        <button
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          className="btn"
          type="submit"
        >
          <CheckIcon height={24} strokeWidth={2} width={24} />
        </button>
      </form>
    </div>
  )
}
