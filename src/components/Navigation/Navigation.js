import classes from "./Navigation.module.css";
import TaskContext from "./../../store/tasks-context";
import { useContext, useEffect, useState } from "react";

const Navigation = () => {
  const taskCtx = useContext(TaskContext);
  const [query, setQuery] = useState("");

  const searchHandler = (e) => {
    setQuery(e.target.value);
  };

  // useEffect(() => {
  //   taskCtx.searchTask(query);
  // }, [query]);

  return (
    <div className={classes.searchNav}>
      <div className={classes.navEl}>
        <input
          onChange={(e) => searchHandler(e)}
          type="search"
          placeholder="search"
          style={{ marginLeft: "-18px" }}
        />
        <button className={classes.sortBtn} onClick={() => taskCtx.sortTask()}>
          ↑↓
        </button>
      </div>
    </div>
  );
};

export default Navigation;
