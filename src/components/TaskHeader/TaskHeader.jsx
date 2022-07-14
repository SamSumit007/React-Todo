import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ tasks }) => {
  // sample values to be replaced
  //let totalTask = 0;
  let unCompletedTask = tasks.filter((task) => !task.done).length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
       <h1>Todo List</h1>
       <div className={styles.small}>You have <b data-testid="header-remaining-task">{unCompletedTask}</b> of{" "}
      <b data-testid="header-total-task">{tasks.length}</b> tasks remaining.
    </div></div>
  );
};

export default TaskHeader;
