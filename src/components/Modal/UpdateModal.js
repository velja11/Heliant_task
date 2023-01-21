import { Fragment, useState, useRef } from "react";
import classes from "./UpdateModal.module.css";
import { useContext } from "react";
import TaskContext from "../../store/tasks-context";

const getCurrDate = () => {
  const date = new Date();
  const currDate = date.getDate();
  date.setDate(currDate);
  const defaultDate = date.toLocaleDateString("en-CA");

  return defaultDate;
};

const UpdateModal = (props) => {
  const taskCtx = useContext(TaskContext);
  console.log(props);

  const titleRef = useRef(null);
  const [date, setDate] = useState(getCurrDate());
  const descRef = useRef(null);
  const [priority, setPriority] = useState(props.priority);

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
      date: date,
      desc: description,
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
            className={classes.updForm}
            onSubmit={(e, id, task) => updateTaskHandler(e, id)}
          >
            <div className={classes.formDir}>
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
                defaultValue={props.date}
                min={getCurrDate()}
                onChange={dateHandler}
              ></input>
              <label htmlFor="opis">Opis</label>
              <textarea
                id="opis"
                maxLength="100"
                rows="3"
                ref={descRef}
                required
                placeholder={props.desc}
                defaultValue={props.desc}
              ></textarea>
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
