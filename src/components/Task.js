import { useContext } from "react";
import TaskContext from "../store/tasks-context";
import classes from "./Task.module.css";
import UpdateModal from "./Modal/UpdateModal";

const Task = (props) => {
  const taskCtx = useContext(TaskContext);

  const deleteTaskHandler = (e, taskId) => {
    e.stopPropagation();
    taskCtx.deleteTask(taskId);
  };

  const finishTaskHandler = (e) => {
    e.stopPropagation();
    taskCtx.toogleTask(props.id);
  };

  function openModal() {
    props.onClick();
  }

  const onCloseModal = (e) => {
    e.stopPropagation();
    taskCtx.closeModal();
  };

  let classesPriority;

  if (props.priority === "Nizak") {
    classesPriority = classes.lowPrior;
  } else if (props.priority === "Srednji") {
    classesPriority = classes.middPrior;
  } else {
    classesPriority = classes.highPrior;
  }

  return (
    <div
      className={`${classes.task} ${classesPriority}`}
      onClick={() => openModal()}
    >
      <button
        className={`${
          props.complete ? classes.finishBtn : classes.unfinishBtn
        }`}
        onClick={(e) => finishTaskHandler(e)}
      >
        {props.complete ? "✓" : "+"}
      </button>
      <span>{props.priority} prioritet</span>
      <div className={classes.data}>
        <h1>{props.title}</h1>
        <span>{props.date}</span>
      </div>
      <textarea defaultValue={props.desc}></textarea>
      <button
        className={classes.delBtn}
        style={{ marginTop: "10px" }}
        onClick={(e) => deleteTaskHandler(e, props.id)}
      >
        Obrisi
      </button>
      {taskCtx.modal && (
        <UpdateModal
          title={props.title}
          date={props.date}
          desc={props.desc}
          priority={props.priority}
          id={props.id}
          closeModal={(e) => onCloseModal(e)}
        />
      )}
    </div>
  );
};

export default Task;
