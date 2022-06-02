import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterType = 'all' | 'active' | 'completed';

function App() {

    let [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: false},
        {id: 3, title: 'JS', isDone: true},
    ])
    let [filter, setFilter] = useState<FilterType>('completed')

    const removeTask = (id: number) => {
        const visibleTasks = tasks.filter(t => t.id !== id)
        setTasks(visibleTasks)
    }
    const changeFilter = (filter: FilterType) => {
        setFilter(filter)
    }


    let tasksForTodolist = tasks

    switch (filter) {
        case "completed":
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone)
            break
        case "active":
            tasksForTodolist = tasksForTodolist.filter(t => !t.isDone)
            break
    }

    return (
        <div className="App">
            <Todolist title={'Learn'} tasks={tasksForTodolist} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
