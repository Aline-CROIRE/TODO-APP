"use client"

import { useState, useEffect } from "react"
import "./App.css"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import FilterBar from "./components/FilterBar"

export type Duration = "Daily" | "Weekly" | "Monthly" | "Yearly"
export type Filter = "All" | Duration

export interface Task {
  id: string
  name: string
  duration: Duration
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  })
  const [filter, setFilter] = useState<Filter>("All")
  const [editingTask, setEditingTask] = useState<Task | null>(null)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (name: string, duration: Duration) => {
    const newTask: Task = {
      id: Date.now().toString(),
      name,
      duration,
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const updateTask = (id: string, name: string, duration: Duration) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, name, duration } : task)))
    setEditingTask(null)
  }

  const filteredTasks = filter === "All" ? tasks : tasks.filter((task) => task.duration === filter)

  return (
    <div className="app">
      <div className="hero">
        <h1>
          Make a better plan <br />
          for your life
        </h1>
        <p>Whoever you are, Whatever you are looking for, we have the perfect place for you</p>

        <TaskForm
          onAddTask={addTask}
          editingTask={editingTask}
          onUpdateTask={updateTask}
          onCancelEdit={() => setEditingTask(null)}
        />
      </div>

      <div className="content">
        <FilterBar currentFilter={filter} onFilterChange={setFilter} />

        <TaskList tasks={filteredTasks} onDelete={deleteTask} onEdit={setEditingTask} />
      </div>
    </div>
  )
}

export default App
