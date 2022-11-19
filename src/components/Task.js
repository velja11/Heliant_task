import { useContext } from "react";
import TaskContext from "../store/tasks-context";
import classes from "./Task.module.css";

const Task = (props) => {
  const taskCtx = useContext(TaskContext);

  const deleteTaskHandler = (taskId) => {
    taskCtx.deleteTask(taskId);
  };

  const finishTaskHandler = () => {
    taskCtx.toogleTask(props.id);
  };

  return (
    <div className={classes.task}>
      <button
        className={`${
          props.complete ? classes.finishBtn : classes.unfinishBtn
        }`}
        onClick={finishTaskHandler}
      >
        {props.complete ? "✓" : "+"}
      </button>
      <span>{props.priority} prioritet</span>
      <div className={classes.data}>
        <h1>{props.title}</h1>
        <span>{props.date}</span>
      </div>
      <textarea value={props.desc}>{props.desc}</textarea>
      <button
        className={classes.delBtn}
        style={{ marginTop: "10px" }}
        onClick={() => deleteTaskHandler(props.id)}
      >
        Obrisi
      </button>
    </div>
  );
};

export default Task;
