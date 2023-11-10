import React from "react";

import "./GoalList.css";

const GoalList = (props) => {
  return (
    <div className={"goal-list"}>
      <ul>
        {props.goals?.map((goal) => {
          return <li key={goal.id}>{goal.label}</li>;
        })}
      </ul>
    </div>
  );
};

export default GoalList;
