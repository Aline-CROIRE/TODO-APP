import React, { useState } from "react";
import type { Duration } from "../types/index";
import type { Task } from "../types/index";

interface TaskInputProps {
  onAdd: (task: Task) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState<Duration>("Daily");

  const handleSubmit = () => {
    if (!name.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      name,
      duration,
    };
    onAdd(newTask);
    setName("");
  };

  return (
    <div className="input-container">
      <select value={duration} onChange={(e) => setDuration(e.target.value as Duration)}>
        <option>Daily</option>
        <option>Weekly</option>
        <option>Monthly</option>
        <option>Yearly</option>
      </select>
      <input
        type="text"
        placeholder="Task"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Add task</button>
    </div>
  );
};

export default TaskInput;
