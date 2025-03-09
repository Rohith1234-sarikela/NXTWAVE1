const Task = ({ task, deleteTask, toggleComplete }) => {
    return (
      <div className={`task ${task.completed ? 'completed' : ''}`}>
        <span onClick={() => toggleComplete(task.id)}>{task.name}</span>
        <button onClick={() => deleteTask(task.id)} className="delete-btn">
          Delete
        </button>
      </div>
    );
  };
  
  export default Task