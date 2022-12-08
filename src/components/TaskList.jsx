import React from 'react'

import { TaskItem } from './TaskItem'
import styles from './Tasklist.module.css'

export const TaskList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <ul className={styles.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem
            key={task.id}
            deleteTask={deleteTask}
            task={task}
            toggleTask={toggleTask}
          />
        ))}
    </ul>
  )
}
