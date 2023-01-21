import "./App.css";
import TasksList from "./components/TasksList";
import TaskForm from "./components/TaskForm/TaskForm";
import { useContext, useEffect } from "react";
import TaskContext from "./store/tasks-context";
import Navigation from "./components/Navigation/Navigation";

import { useState } from "react";
import UpdateModal from "./components/Modal/UpdateModal";

function App() {
  const taskCtx = useContext(TaskContext);
  const [query, setQuery] = useState("");

  const tasks = taskCtx.tasks;
  const taskForUpd = taskCtx.taskForUpd;

  console.log(tasks);

  const onCloseModal = (e) => {
    e.stopPropagation();
    taskCtx.closeModal();
  };

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
          <Navigation query={query} setQuery={setQuery} />
          <TasksList
            tasks={tasks.filter((tsk) =>
              tsk.title.toLowerCase().includes(query.toLowerCase())
            )}
          />
        </>
      )}
      {taskForUpd && (
        <UpdateModal
          title={taskForUpd[0].title}
          date={taskForUpd[0].date}
          desc={taskForUpd[0].desc}
          priority={taskForUpd[0].priority}
          id={taskForUpd[0].id}
          closeModal={(e) => onCloseModal(e)}
        />
      )}
    </div>
  );
}

export default App;
