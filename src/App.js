import { useState } from 'react';
import TaskForm from './components/TaskForm';
import Task from './components/Task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Completed
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks yet!</p>
        ) : (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App