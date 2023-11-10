import React from "react";

import './GoalList.css'

const GoalList = () => {
    return (
        <div className={'goal-list'}>
            <h2> Course Goals</h2>
            <ul>
                <li>Finish the Course</li>
                <li>Learn all the main topics</li>
                <li>Help others</li>
            </ul>
        </div>
    )
}

export default GoalList
