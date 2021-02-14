import { FaCheckCircle, FaTimes } from 'react-icons/fa'

export const TasksComponent = ({ tasks, setTasks }) => {

  const deleteTask = async (taskId) => {
    await fetch(`http://localhost:5000/tasks/${taskId}`, { method: 'DELETE' });
    setTasks(tasks.filter((x) => x.id !== taskId));
  };

  const finishedTask = async (taskId) => {
    var getRequest = await (await fetch(`http://localhost:5000/tasks/${taskId}`)).json();

    getRequest.finished = getRequest.finished == true ? false : true;

    var requestOption = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(getRequest)
    };

    const request = await fetch(`http://localhost:5000/tasks/${taskId}`, requestOption);
    var response = await request.json();

    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, finished: response.finished } : task)
    )
  }


  return (
    <>
      {tasks.map((task, index) => (
        <div className='task' key={index} >
          <div id='leftDiv'>
            <h4 className={task.finished ? 'task-finished' : ''}> {task.name} </h4>
            <p className={task.finished ? 'task-finished' : ''} style={{ color: 'gray' }}>{task.day}</p>
          </div>
          <div id='rightDiv'>
            <span><FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => deleteTask(task.id)} /> </span>
            <span><FaCheckCircle style={{ color: task.finished ? 'green' : '' }} onClick={() => finishedTask(task.id)} /></span>
          </div>
        </div>
      ))}
    </>
  )
}
