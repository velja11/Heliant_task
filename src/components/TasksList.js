import Task from "./Task";
import classes from "./TaskList.module.css";

const TasksList = ({ tasks }) => {
  return (
    <div className={classes.tasklist}>
      {tasks.length > 0 ? (
        tasks.map((tsk) => {
          return (
            <Task
              key={tsk.id}
              id={tsk.id}
              title={tsk.title}
              date={tsk.date}
              desc={tsk.desc}
              priority={tsk.priority}
              complete={tsk.complete}
            />
          );
        })
      ) : (
        <p>Ne postoji zadatak za zadati kriterium</p>
      )}
    </div>
  );
};

export default TasksList;
