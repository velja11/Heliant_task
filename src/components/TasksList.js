import Task from "./Task";

const Tasks = (props) => {
  return (
    <div>
      {props.excercise.map((exc) => {
        return (
          <Task
            key={exc.id}
            title={exc.title}
            date={exc.date}
            desc={exc.desc}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
