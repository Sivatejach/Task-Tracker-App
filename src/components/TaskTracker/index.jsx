import { useState } from 'react';  
import { FiPlus } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import TaskItem from '../TaskItem'; 

import './index.css';

const TaskTracker = () => {

  const [tasks, setTasks] = useState([]); 
  const [task, setTask] = useState('');   


  const handleInputChange = (event) => {
    setTask(event.target.value);  
}


  const addTask = () => {
    if (task.trim()) {
      const newTask = { id: uuidv4(), name: task, completed: false };
      setTasks((prevTasks) => [...prevTasks, newTask]);  
      setTask('');  
    }
  };


  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));  // Remove task by id
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t  
      )
    );
  };

  return (
    <div className="task-tracker-container">
      <h1>Task Tracker App</h1>
      <div className="task-input-container">
        <input
          type="text"
          value={task}  
          onChange={handleInputChange} 
          placeholder="Add new task"
        />
        <button onClick={addTask}>
          <FiPlus size={18} /> Add Task
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((t) => (
          <TaskItem
            key={t.id}
            task={t}
            toggleComplete={toggleComplete}  
            deleteTask={deleteTask}  
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskTracker;
