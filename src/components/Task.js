import classes from "./Task.module.css";

const Task = (props) => {
  return (
    <div className={classes.task}>
      <button style={{ position: "absolute" }}>+</button>
      <span>{props.priority} prioritet</span>
      <div className={classes.data}>
        <h1>{props.title}</h1>
        <span>{props.date}</span>
      </div>
      <textarea value={props.desc}>{props.desc}</textarea>
      <button style={{ marginTop: "10px" }}>Obrisi</button>
    </div>
  );
};

export default Task;
