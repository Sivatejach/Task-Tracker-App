import { useState } from 'react';
import { FiCheckCircle, FiXCircle, FiTrash2 } from 'react-icons/fi';
import './index.css';

const TaskItem = (props) => {
  const { task, toggleComplete, deleteTask } = props;
  const [clicked, setClicked] = useState(false); 

  const handleItemClick = () => {
    setClicked(!clicked); 
  };

  return (
    <li
      className={`task-item ${task.completed ? 'completed' : ''} ${clicked ? 'clicked' : ''}`}
      onClick={handleItemClick}
    >
      <span className="toggle-icon" onClick={() => toggleComplete(task.id)}>
        {task.completed ? (
          <FiCheckCircle className="icon completed-icon" />
        ) : (
          <FiXCircle className="icon pending-icon" />
        )}
      </span>
      <span className="task-text">{task.name}</span>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        <FiTrash2 className="icon delete-icon" />
      </button>
    </li>
  );
};

export default TaskItem;
