import Task from "./Task";
import classes from "./TaskList.module.css";

const Tasks = (props) => {
  return (
    <div className={classes.tasklist}>
      {props.excercise.map((exc) => {
        return (
          <Task
            key={exc.id}
            id={exc.id}
            title={exc.title}
            date={exc.date}
            desc={exc.desc}
            priority={exc.priority}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
