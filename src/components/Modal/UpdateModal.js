import { Fragment, useState, useRef } from "react";
import classes from "./UpdateModal.module.css";
import { useContext } from "react";
import TaskContext from "../../store/tasks-context";

const UpdateModal = (props) => {
  const taskCtx = useContext(TaskContext);

  const titleRef = useRef(null);
  const [date, setDate] = useState(props.date);
  const descRef = useRef(null);
  const [priority, setPriority] = useState("Nizak");

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const getPriority = (e) => {
    setPriority(e.target.value);
  };

  const updateTaskHandler = (e, id) => {
    e.preventDefault();

    id = props.id;

    const title = titleRef.current.value;
    const description = descRef.current.value;

    const taskUpd = {
      title: title,
      desc: description,
      date: date,
      priority: priority,
    };

    taskCtx.updateTask(id, taskUpd);
  };

  return (
    <Fragment>
      <div>
        <div className={classes.backg} onClick={props.closeModal} />
        <div className={classes.modal}>
          <form
            className={classes.test2}
            onSubmit={(e, id, task) => updateTaskHandler(e, id)}
          >
            <div className={classes.test}>
              <label htmlFor="naziv">Naziv</label>
              <input
                type="text"
                id="naziv"
                maxLength="100"
                ref={titleRef}
                required
                defaultValue={props.title}
              ></input>
              <label htmlFor="datum">Rok predaje</label>
              <input
                type="date"
                placeholder={props.date}
                id="datum"
                defaultValue={date}
                min={date}
                onChange={dateHandler}
              ></input>
              <label htmlFor="opis">Opis</label>
              <textarea
                id="opis"
                maxLength="100"
                rows="3"
                ref={descRef}
                required
              >
                {props.desc}
              </textarea>
              <label htmlFor="prioritet">Prioritet</label>
              <select
                id="prioritet"
                name="Prioritet"
                defaultValue={props.priority}
                onChange={getPriority}
              >
                <option value="Nizak">Nizak</option>
                <option value="Srednji">Srednji</option>
                <option value="Visok">Visok</option>
              </select>
            </div>
            <button className={classes.btnUpd}>Izmeni</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateModal;
