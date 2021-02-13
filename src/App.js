import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import { TasksComponent } from './Components/TasksComponent';
import { useState } from "react"

function App() {
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
    {
      id: 4,
      name: 'Love Bro (❤)',
      reminder: true,
      finished: false,
      day: 'Forever'
    }
  ]);
  return (
    <div className="container">
      <HeaderComponent />
      {tasks.length > 0 ? <TasksComponent tasks={tasks} setTasks={setTasks} /> : 'Hurrah!! No Tasks Today'}
    </div>
  );
};

export default App;
