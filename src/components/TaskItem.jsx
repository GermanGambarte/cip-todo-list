import React, { useState } from 'react'
import { CheckIcon, PencilIcon, TrashIcon } from '@heroicons/react/solid'

import styles from './TaskItem.module.css'

export const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
  const { name, checked, id } = task
  const [isChecked, setIsChecked] = useState(checked)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    toggleTask(id)
  }

  return (
    <li className={styles.task}>
      <div className={styles['task-group']}>
        <input
          checked={isChecked}
          className={styles.checkbox}
          id={id}
          name={name}
          type="checkbox"
          onChange={handleCheckboxChange}
        />
        <label className={styles.label} htmlFor={id}>
          {name}
          <p className={styles.checkmark}>
            <CheckIcon height={24} strokeWidth={2} width={24} />
          </p>
        </label>
      </div>
      <div className={styles['task-group']}>
        <button
          aria-label={`Update ${name} Task`}
          className="btn"
          onClick={() => enterEditMode(task)}
        >
          <PencilIcon height={24} width={24} />
        </button>
        <button
          aria-label={`Delete ${name} Task`}
          className={`btn ${styles.delete}`}
          onClick={() => deleteTask(id)}
        >
          <TrashIcon height={24} width={24} />
        </button>
      </div>
    </li>
  )
}
