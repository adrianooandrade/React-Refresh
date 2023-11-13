import React from "react";

import "./NewGoal.css";

const NewGoal = (props) => {
  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      label: "New goal",
    };

    props.onAddGoal(newGoal);
  };

  return (
    <div className="new-goal" onSubmit={addGoalHandler}>
      <form>
        <input type="text" />
        <button type="submit"> Add New Goal</button>
      </form>
    </div>
  );
};

export default NewGoal;
