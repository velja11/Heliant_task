import "./App.css";
import TasksList from "./components/TasksList";
import TaskForm from "./components/TaskForm/TaskForm";
import { useContext } from "react";
import TaskContext from "./store/tasks-context";

function App() {
  const taskCtx = useContext(TaskContext);

  const tasks = taskCtx.tasks;

  return (
    <div className="App">
      <TaskForm />
      {tasks.length === 0 ? (
        <p>There is no tasks currently</p>
      ) : (
        <TasksList excercise={tasks} />
      )}
    </div>
  );
}

export default App;
