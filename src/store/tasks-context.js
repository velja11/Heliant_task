import { createContext, useState } from "react";

const TaskContext = createContext({
  tasks: [],
  addTask: (task) => {},
  deleteTask: (taskId) => {},
  toogleTask: (taskId) => {},
  closeModal: () => {},
  updateTask: (id, task) => {},
  sortTask: () => {},
  searchTask: (query) => {},
  order: false,
  findTask: (id) => {},
  taskForUpd: null,
});

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("stgtask")) || []
  );
  const [order, setOrder] = useState(false);
  const [tasktoUpd, setTaskToUpd] = useState(null);

  function addTaskHandler(task) {
    setTasks((prevState) => {
      return prevState.concat(task);
    });
  }

  function deleteTaskHandler(taskId) {
    console.log(taskId);
    const filterTask = tasks.filter((task) => task.id !== taskId);
    setTasks(filterTask);
  }

  function toogleTaskHandler(taskId) {
    console.log(taskId);
    const updateTasks = [...tasks].map((task) => {
      if (task.id === taskId) {
        task.complete = !task.complete;
      }

      return task;
    });

    setTasks(updateTasks);
  }

  function closeModalHandler() {
    setTaskToUpd(null);
  }

  function updateTaskHandler(id, task) {
    const updateList = [...tasks].map((tsk) => {
      if (tsk.id === id) {
        tsk.title = task.title || tsk.title;
        tsk.desc = task.desc || tsk.desc;
        tsk.date = task.date || tsk.date;
        tsk.priority = task.priority || tsk.priority;
      }

      return tsk;
    });

    setTasks(updateList);
    setTaskToUpd(null);
  }

  function sortTaskHandler() {
    setOrder((prevState) => !prevState);
    const newTask = [...tasks];
    newTask.sort((a, b) => {
      return order
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    });
    setTasks(newTask);
  }

  function searchTaskHandler(query) {
    const queryTasks = tasks.filter((tsk) => tsk.title.includes(query));
    setTasks(queryTasks);
  }

  function findTaskHandler(id) {
    const findedTask = tasks.filter((tsk) => tsk.id === id);
    setTaskToUpd(findedTask);
  }

  const tasksCtx = {
    tasks: tasks,
    addTask: addTaskHandler,
    deleteTask: deleteTaskHandler,
    toogleTask: toogleTaskHandler,
    closeModal: closeModalHandler,
    updateTask: updateTaskHandler,
    sortTask: sortTaskHandler,
    searchTask: searchTaskHandler,
    order: order,
    findTask: findTaskHandler,
    taskForUpd: tasktoUpd,
  };

  return (
    <TaskContext.Provider value={tasksCtx}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
