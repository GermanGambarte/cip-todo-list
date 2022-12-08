import { useState } from 'react'

import { CustomForm } from './components/CustomForm'
import { TaskList } from './components/TaskList'

const App = () => {
  const [tasks, setTasks] = useState([])
  const addTask = (task) => {
    setTasks([...tasks, task])
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

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          deleteTask={deleteTask}
          tasks={tasks}
          toggleTask={toggleTask}
        />
      )}
    </div>
  )
}

export default App
