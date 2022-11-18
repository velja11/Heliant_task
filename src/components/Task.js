import { useContext } from "react";
import TaskContext from "../store/tasks-context";
import classes from "./Task.module.css";

const Task = (props) => {
  const taskCtx = useContext(TaskContext);

  const deleteTaskHandler = (taskId) => {
    taskCtx.deleteTask(taskId);
  };

  return (
    <div className={classes.task}>
      <button style={{ position: "absolute" }}>+</button>
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
