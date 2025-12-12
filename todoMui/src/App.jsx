import { useState } from 'react'
import './App.css'
import Header from './components/header'
import TodoList from './components/todoList'
import TodoInput from './components/todoInput'


function App() {
const [currentTask,setCurrentTask] = useState("")
const [tasks,setTasks] = useState([])


function addTask(){
  if(currentTask.trim()){
    let newTask = {
   id: Date.now(),
   text: currentTask.trim(),
   completed: false
    }
setTasks(prev =>[...prev, newTask])
setCurrentTask("")

}

  }
function deleteTask(id){
setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
}

  function toggleTask(id){
    setTasks((prevTasks) => prevTasks.map((task) => {
      if(task.id === id){
        return {...task,completed:!task.completed}
          } return task
      
    })
  );
  }


  return (
    <>
      <Header/>
      <TodoInput value={currentTask} addTask={addTask} onChange={setCurrentTask}/>
      <TodoList onToggle={toggleTask} tasks={tasks} onDelete={deleteTask}/>
    </>
  )
}

export default App
