import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';


type TaskType = {
    id: string
    title: string
    isDone: boolean

}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    setFilterInput: (el: string) => void
    callback: () => void
    filterInput: string
    AddNewTask:()=>void
}

export function Todolist(props: PropsType) {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setFilterInput(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            props.callback()
        }
    }
    const changeFilterName = (name:FilterValuesType) => {
        props.changeFilter(name)
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={props.filterInput} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <button onClick={()=>{props.AddNewTask()}}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickDeleteHandler = () => {
                        props.removeTask(t.id)
                    }

                    return ( <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onClickDeleteHandler}>x
                        </button>
                    </li>)})

            }
        </ul>
        <div>
            <button onClick={() => {
                changeFilterName("all")
            }}>
                All
            </button>
            <button onClick={() => {
                changeFilterName("active")
            }}>
                Active
            </button>
            <button onClick={() => {
                changeFilterName("completed")
            }}>
                Completed
            </button>
        </div>
    </div>
}
