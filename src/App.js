import "./App.css"
import { HeaderComponent } from "./Components/HeaderComponent"
import { TasksComponent } from "./Components/TasksComponent"
import { AddTaskComponent } from "./Components/AddTaskComponent"
import { useState, useEffect } from "react"
import { FooterComponent } from "./Components/FooterComponent"
import { Route, BrowserRouter as Router } from "react-router-dom"
import { AboutComponent } from "./Components/AboutComponent"

function App() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchData().then(response => response.json()).then((r) => { setTasks(r) })
  }, [])

  const addTask = async (task) => {
    const response = await fetch("http://localhost:5000/tasks", { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(task) })
    const data = await response.json();
    setTasks([...tasks, data])
  }
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/tasks")
    return response;
  }

  return (
    <Router>
      <div className="container">
        <HeaderComponent btnName={showAddForm ? "Close" : "Add"} btnColor={showAddForm ? "red" : "green"} onAction={() => setShowAddForm(!showAddForm)} />

        <Route path='/' exact render={(props) => (
          <>
            {showAddForm && <AddTaskComponent onAdd={addTask} />}
            {tasks.length > 0 ? <TasksComponent tasks={tasks} setTasks={setTasks} /> : "Hurrah!! No Tasks Today"}
          </>
        )} />
        <Route path='/about' component={AboutComponent} />
        <FooterComponent />
      </div>
    </Router>
  )
}

export default App
