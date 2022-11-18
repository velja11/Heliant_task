import { useRef, useState } from "react";
import classes from "./TaskForm.module.css";

const TaskForm = () => {
  const date = new Date();
  const currDate = date.getDate();
  date.setDate(currDate);
  const defaultDate = date.toLocaleDateString("en-CA");

  const nazivZadatka = useRef(null);
  const [datum, setDatum] = useState(defaultDate);
  const opis = useRef(null);
  const [prioritet, setPrioritet] = useState("nizak");

  const dateHandler = (e) => {
    setDatum(e.target.value);
  };

  const getPriority = (e) => {
    setPrioritet(e.target.value);
  };

  const addTaskHandler = (e) => {
    e.preventDefault();

    const test = nazivZadatka.current.value;
    const opisZadatka = opis.current.value;

    if (test === "" || opisZadatka === "" || datum === "" || prioritet === "") {
      alert("Niste popunili sva polja");
      return;
    }

    console.log(test, datum, opisZadatka, prioritet);
  };

  return (
    <form className={classes.form} onSubmit={addTaskHandler}>
      <div className={classes.elements}>
        <label htmlFor="naziv">Naziv</label>
        <input
          id="naziv"
          type="text"
          maxLength="100"
          ref={nazivZadatka}
        ></input>
        <label htmlFor="datum">Datum</label>
        <input
          id="datum"
          type="date"
          defaultValue={defaultDate}
          min={defaultDate}
          onChange={dateHandler}
        />
        <label htmlFor="opis">Opis</label>
        <textarea
          id="opis"
          maxLength="100"
          rows="3"
          ref={opis}
          defaultValue="Description"
        ></textarea>
        <label htmlFor="prioritet">Prioritet</label>
        <select id="prioritet" name="Prioritet" onChange={getPriority}>
          <option value="nizak">Nizak</option>
          <option value="srednji">Srednji</option>
          <option value="visok">Visok</option>
        </select>
        <button type="submit">Dodaj zadatak</button>
      </div>
    </form>
  );
};

export default TaskForm;
