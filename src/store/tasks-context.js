import { createContext, useState } from "react";

const TaskContext = createContext({
  tasks: [],
  addTask: (task) => {},
  deleteTask: (taskId) => {},
});

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function addTaskHandler(task) {
    setTasks((prevState) => {
      return prevState.concat(task);
    });
  }

  function deleteTaskHandler(taskId) {
    const filterTask = tasks.filter((task) => task.id !== taskId);
    setTasks(filterTask);
  }

  const tasksCtx = {
    tasks: tasks,
    addTask: addTaskHandler,
    deleteTask: deleteTaskHandler,
  };

  return (
    <TaskContext.Provider value={tasksCtx}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
