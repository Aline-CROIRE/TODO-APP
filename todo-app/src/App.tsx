import React, { useState } from "react";
import TaskInput from "./components/TaskInInput";
import TaskCard from "./components/TaskCard";
import FilterBar from "./components/FilterBar";
import type { Task, Duration } from "./types/index";
import "./styles/App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Duration | "All">("All");
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const filtered = filter === "All" ? tasks : tasks.filter((t) => t.duration === filter);

  const handleAdd = (task: Task) => {
    if (editingTask) {
      setTasks((prev) =>
        prev.map((t) => (t.id === editingTask.id ? task : t))
      );
      setEditingTask(null);
    } else {
      setTasks([...tasks, task]);
    }
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
  };

  return (
    <div className="container">
      <header>
        <h1>Make a <span>better</span> plan for your life</h1>
        <p>Whoever you are , Whatever you are looking for, we have the perfect place for you</p>
      </header>

      <TaskInput onAdd={handleAdd} />
      <FilterBar selected={filter} onChange={setFilter} />

      <div className="task-list">
        {filtered.map((task, i) => (
          <TaskCard
            key={task.id}
            index={i}
            task={task}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
