import { useContext } from "react";
import TaskContext from "../store/tasks-context";
import classes from "./Task.module.css";

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
      onClick={() => {
        taskCtx.findTask(props.id);
      }}
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
      <textarea
        defaultValue={props.desc}
        placeholder={props.desc}
        maxLength="100"
        rows="3"
      ></textarea>
      <button
        className={classes.delBtn}
        style={{ marginTop: "10px" }}
        onClick={(e) => deleteTaskHandler(e, props.id)}
      >
        Obrisi
      </button>
    </div>
  );
};

export default Task;
