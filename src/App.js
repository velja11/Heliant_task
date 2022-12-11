import "./App.css";
import TasksList from "./components/TasksList";
import TaskForm from "./components/TaskForm/TaskForm";
import { useContext, useEffect } from "react";
import TaskContext from "./store/tasks-context";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const taskCtx = useContext(TaskContext);

  const tasks = taskCtx.tasks;

  const onShowModal = () => {
    taskCtx.showModal();
  };

  useEffect(() => {
    const newTasks = localStorage.getItem("stgtask");
    const storageTasks = JSON.parse(newTasks);

    taskCtx.reloadTask(storageTasks);
  }, []);

  useEffect(() => {
    const updTask = JSON.stringify(tasks);
    localStorage.setItem("stgtask", updTask);
  }, [tasks]);

  return (
    <div className="App">
      <TaskForm />
      {!tasks.length ? (
        <p>Trenutno nema zadataka!</p>
      ) : (
        <>
          {tasks.length > 1 && <Navigation />}
          <TasksList excercise={tasks} showModal={onShowModal} />
        </>
      )}
    </div>
  );
}

export default App;
