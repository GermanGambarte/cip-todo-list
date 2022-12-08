import { useState } from 'react'

import { useLocalStorage } from './hooks/useLocalStorage'
import { CustomForm } from './components/CustomForm'
import { EditForm } from './components/EditForm'
import { TaskList } from './components/TaskList'

const App = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [toEditTask, setToEditTask] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [previousFocusEl, setPreviousFocusEl] = useState(null)
  const addTask = (task) => {
    setTasks([...tasks, task])
  }
  const closeEditMode = () => {
    setIsEditing(false)
    previousFocusEl.focus()
  }
  const deleteTask = (id) => {
    const filteredList = tasks.filter((task) => task.id !== id)

    setTasks(filteredList)
  }

  const toggleTask = (id) => {
    const toggle = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    )

    setTasks(toggle)
  }

  const updateTask = (task) => {
    const update = tasks.map((t) =>
      t.id === task.id ? { ...t, name: task.name } : t
    )

    closeEditMode()
    setTasks(update)
  }

  const enterEditMode = (task) => {
    setToEditTask(task)
    setIsEditing(true)
    setPreviousFocusEl(document.activeElement)
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
        <EditForm
          closeEditMode={closeEditMode}
          toEditTask={toEditTask}
          updateTask={updateTask}
        />
      )}
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          deleteTask={deleteTask}
          enterEditMode={enterEditMode}
          tasks={tasks}
          toggleTask={toggleTask}
        />
      )}
    </div>
  )
}

export default App
