import { createContext, useState } from "react";

const TaskContext = createContext({
  tasks: [],
  addTask: (task) => {},
});

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function addTaskHandler(task) {
    setTasks((prevState) => {
      return prevState.concat(task);
    });
  }

  const tasksCtx = {
    tasks: tasks,
    addTask: addTaskHandler,
  };

  return (
    <TaskContext.Provider value={tasksCtx}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
