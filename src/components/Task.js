const Task = (props) => {
  return (
    <li>
      <h1>{props.title}</h1>
      <span>{props.date}</span>
      <textarea value={props.desc}>{props.desc}</textarea>
    </li>
  );
};

export default Task;
