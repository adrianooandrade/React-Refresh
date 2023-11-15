import React, { useState } from "react";

import "./NewGoal.css";

const NewGoal = (props) => {
  const [textEntered, setTextEntered] = useState("");

  const textChangeHandler = (event) => {
    setTextEntered(event.target.value);
  };
  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      label: textEntered,
    };

    setTextEntered("");

    props.onAddGoal(newGoal);
  };

  return (
    <div className="new-goal" onSubmit={addGoalHandler}>
      <form>
        <input type="text" value={textEntered} onChange={textChangeHandler} />
        <button type="submit"> Add New Goal</button>
      </form>
    </div>
  );
};

export default NewGoal;
