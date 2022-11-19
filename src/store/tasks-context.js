import { createContext, useState } from "react";

const TaskContext = createContext({
  tasks: [],
  addTask: (task) => {},
  deleteTask: (taskId) => {},
  toogleTask: (taskId) => {},
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

  function toogleTaskHandler(taskId) {
    const updateTasks = [...tasks].map((task) => {
      if (task.id === taskId) {
        task.complete = !task.complete;
      }

      return task;
    });

    setTasks(updateTasks);
  }

  const tasksCtx = {
    tasks: tasks,
    addTask: addTaskHandler,
    deleteTask: deleteTaskHandler,
    toogleTask: toogleTaskHandler,
  };

  return (
    <TaskContext.Provider value={tasksCtx}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
