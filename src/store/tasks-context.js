import { createContext, useState } from "react";

const TaskContext = createContext({
  tasks: [],
  addTask: (task) => {},
  deleteTask: (taskId) => {},
  toogleTask: (taskId) => {},
  modal: null,
  showModal: () => {},
  closeModal: () => {},
  updateTask: (id, task) => {},
  reloadTask: (task) => {},
  sortTask: () => {},
  searchTask: (query) => {},
  order: false,
});

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState(false);

  function addTaskHandler(task) {
    setTasks((prevState) => {
      return prevState.concat(task);
    });
  }

  function deleteTaskHandler(taskId) {
    const filterTask = tasks.filter((task) => task.id !== taskId);
    setTasks(filterTask);
  }

  function reloadTaskHandler(newTasks) {
    setTasks(newTasks);
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

  function closeModalHandler() {
    setModal(false);
  }

  function showModalHandler() {
    setModal(true);
  }

  function updateTaskHandler(id, task) {
    const updateList = [...tasks].map((tsk) => {
      if (tsk.id === id) {
        tsk.title = task.title || tsk.title;
        tsk.desc = task.desc || tsk.desc;
        tsk.date = task.date || tsk.date;
        tsk.priority = task.priority || tsk.date;
      }

      return tsk;
    });

    setTasks(updateList);
    setModal(false);
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

  const tasksCtx = {
    tasks: tasks,
    modal: modal,
    addTask: addTaskHandler,
    deleteTask: deleteTaskHandler,
    toogleTask: toogleTaskHandler,
    closeModal: closeModalHandler,
    showModal: showModalHandler,
    updateTask: updateTaskHandler,
    reloadTask: reloadTaskHandler,
    sortTask: sortTaskHandler,
    searchTask: searchTaskHandler,
    order: order,
  };

  return (
    <TaskContext.Provider value={tasksCtx}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
