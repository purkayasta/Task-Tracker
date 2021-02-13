import { FaCheckCircle, FaTimes } from 'react-icons/fa'

export const TasksComponent = ({ tasks, setTasks }) => {
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((x) => x.id !== taskId));
  };
  const finishedTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, finished: !task.finished } : task)
    );
  };

  const toggleReminder = (taskId) => {
  };

  return (
    <>
      {tasks.map((task, index) => (
        <div className='task' key={index} >
          <div id='leftDiv'>
            <h4 className={ task.finished ? 'task-finished' : '' }> {task.name} </h4>
            <p className={ task.finished ? 'task-finished' : '' } style={{ color: 'gray' }}>{task.day}</p>
          </div>
          <div id='rightDiv'>
            <span><FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => deleteTask(task.id)} /> </span>
            <span><FaCheckCircle style={{ color: task.finished ? 'green' : '' }} onClick={() => finishedTask(task.id)} /></span>
          </div>
        </div>
      ))}
    </>
  )
};
