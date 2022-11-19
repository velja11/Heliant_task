import "./App.css";
import TasksList from "./components/TasksList";
import TaskForm from "./components/TaskForm/TaskForm";
import { useContext } from "react";
import TaskContext from "./store/tasks-context";

function App() {
  const taskCtx = useContext(TaskContext);

  const tasks = taskCtx.tasks;

  const onShowModal = () => {
    taskCtx.showModal();
  };

  return (
    <div className="App">
      <TaskForm />
      {tasks.length === 0 ? (
        <p>Trenutno nema zadataka!</p>
      ) : (
        <TasksList excercise={tasks} showModal={onShowModal} />
      )}
    </div>
  );
}

export default App;
