import { useContext, useRef, useState } from "react";
import TaskContext from "../../store/tasks-context";
import classes from "./TaskForm.module.css";

const getCurrDate = () => {
  const date = new Date();
  const currDate = date.getDate();
  date.setDate(currDate);
  const defaultDate = date.toLocaleDateString("en-CA");

  return defaultDate;
};

const TaskForm = () => {
  const taskCtx = useContext(TaskContext);

  const currDate = getCurrDate();

  const titleRef = useRef(null);
  const [date, setDate] = useState(currDate);
  const descRef = useRef(null);
  const [priority, setPriority] = useState("Nizak");

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const getPriority = (e) => {
    setPriority(e.target.value);
  };

  const addTaskHandler = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const description = descRef.current.value;

    if (title === "" || description === "" || date === "" || priority === "") {
      return;
    }

    taskCtx.addTask({
      id: Math.floor(Math.random() * 1000000),
      title: title,
      date: date,
      desc: description,
      priority: priority,
      complete: false,
    });

    titleRef.current.value = "";
    descRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={addTaskHandler}>
      <div className={classes.elements}>
        <label htmlFor="naziv">Naziv</label>
        <input
          id="naziv"
          type="text"
          maxLength="100"
          ref={titleRef}
          required
        ></input>
        <label htmlFor="datum">Datum</label>
        <input
          id="datum"
          type="date"
          defaultValue={currDate}
          min={currDate}
          onChange={dateHandler}
        />
        <label htmlFor="opis">Opis</label>
        <textarea
          id="opis"
          maxLength="100"
          rows="3"
          ref={descRef}
          required
        ></textarea>
        <label htmlFor="prioritet">Prioritet</label>
        <select
          id="prioritet"
          name="Prioritet"
          value={priority}
          onChange={getPriority}
        >
          <option value="Nizak">Nizak</option>
          <option value="Srednji">Srednji</option>
          <option value="Visok">Visok</option>
        </select>
        <button type="submit" className={classes.btnSub}>
          Dodaj zadatak
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
