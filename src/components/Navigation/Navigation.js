import classes from "./Navigation.module.css";
import TaskContext from "./../../store/tasks-context";
import { useContext } from "react";

const Navigation = ({ query, setQuery }) => {
  const taskCtx = useContext(TaskContext);

  return (
    <div className={classes.searchNav}>
      <div className={classes.navEl}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="search"
          placeholder="search"
          style={{ marginLeft: "-18px" }}
        />
        {taskCtx.tasks.length > 1 && (
          <button
            className={classes.sortBtn}
            onClick={() => taskCtx.sortTask()}
          >
            ↑↓
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
