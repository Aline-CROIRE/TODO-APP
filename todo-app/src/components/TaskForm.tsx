"use client"

import type React from "react"

import { useState, useEffect } from "react"
import type { Duration, Task } from "../App"

interface TaskFormProps {
  onAddTask: (name: string, duration: Duration) => void
  editingTask: Task | null
  onUpdateTask: (id: string, name: string, duration: Duration) => void
  onCancelEdit: () => void
}

const TaskForm = ({ onAddTask, editingTask, onUpdateTask, onCancelEdit }: TaskFormProps) => {
  const [taskName, setTaskName] = useState("")
  const [duration, setDuration] = useState<Duration>("Daily")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.name)
      setDuration(editingTask.duration)
    } else {
      setTaskName("")
      setDuration("Daily")
    }
  }, [editingTask])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (taskName.trim()) {
      if (editingTask) {
        onUpdateTask(editingTask.id, taskName, duration)
      } else {
        onAddTask(taskName, duration)
        setTaskName("")
      }
    }
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const selectDuration = (selected: Duration) => {
    setDuration(selected)
    setIsDropdownOpen(false)
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-controls">
        <div className="dropdown-container">
          <button type="button" className="dropdown-button" onClick={toggleDropdown}>
            {duration} <span className="dropdown-arrow">▼</span>
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div onClick={() => selectDuration("Daily")}>Daily</div>
              <div onClick={() => selectDuration("Weekly")}>Weekly</div>
              <div onClick={() => selectDuration("Monthly")}>Monthly</div>
              <div onClick={() => selectDuration("Yearly")}>Yearly</div>
            </div>
          )}
        </div>

        <input
          type="text"
          placeholder="Task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="task-input"
        />

        <button type="submit" className="add-button">
          {editingTask ? "Update task" : "Add task"}
        </button>

        {editingTask && (
          <button type="button" className="cancel-button" onClick={onCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}

export default TaskForm
