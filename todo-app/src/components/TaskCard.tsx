import React from "react";
import type { Task } from "../types/index";

interface Props {
  task: Task;
  index: number;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

const TaskCard: React.FC<Props> = ({ task, index, onDelete, onEdit }) => {
  return (
    <div className="task-card">
      <span>{index + 1}</span>
      <span>{task.name}</span>
      <div className="actions">
        <button onClick={() => onEdit(task)}>✏️</button>
        <button onClick={() => onDelete(task.id)}>🗑️</button>
      </div>
    </div>
  );
};

export default TaskCard;
