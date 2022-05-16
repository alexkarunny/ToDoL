import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const tasks1: TaskType[] = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: false},
        {id: 3, title: 'JS', isDone: true},
    ]
    const tasks2: TaskType[] = [
        {id: 1, title: 'Pickwick', isDone: true},
        {id: 2, title: 'Kopperfield', isDone: false},
        {id: 3, title: 'Oliver', isDone: false},
    ]
    return (
        <div className="App">
            <Todolist title={'Learn'} tasks={tasks1}/>
            <Todolist title={'Read'} tasks={tasks2}/>
        </div>
    );
}

export default App;
