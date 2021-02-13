import './App.css';
import { HeaderComponent } from './Components/HeaderComponent';
import { TasksComponent } from './Components/TasksComponent';
import { AddTaskComponent } from './Components/AddTaskComponent';
import { useState } from "react";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Learn React',
      reminder: true,
      day: 'Friday 2 at 2:20pm',
      finished: false
    },
    {
      id: 2,
      name: 'Build Resume Builder',
      reminder: true,
      finished: false,
      day: 'Friday 3 at 2:20pm'
    },
    {
      id: 3,
      name: 'Build Kanban Board',
      reminder: true,
      finished: false,
      day: 'Friday 4 at 2:20pm'
    },
  ]);
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10) + 1;
    const newTask = {
      id: id,
      name: task.name,
      reminder: false,
      finished: false,
      day: task.day
    }
    console.log(newTask);
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="container">
      <HeaderComponent btnName={showAddForm ? 'Close' : 'Add'} btnColor={showAddForm ? 'red' : 'green'} onAction={() => setShowAddForm(!showAddForm)} />
      { showAddForm && <AddTaskComponent onAdd={addTask} />}
      {tasks.length > 0 ? <TasksComponent tasks={tasks} setTasks={setTasks} /> : 'Hurrah!! No Tasks Today'}
    </div>
  );
};

export default App;
