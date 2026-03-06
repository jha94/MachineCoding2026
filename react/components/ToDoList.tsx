import { useState } from 'react'
import './component.css';

interface task {
    key: number,
    desc: string
}

const ToDoList = () => {
    const [currentTask, setCurrentTask] = useState<string>('');
    const [taskList, setTaskList] = useState<task[]>([])

    const onEdit = (currentTask: task) => {
        const updatedTasks = taskList.filter((task) => {
            if (task.key !== currentTask.key) {
                return task
            }
        })
        setTaskList([...updatedTasks])
        setCurrentTask(currentTask.desc)
    }

    const handleClick = (type: string) => {
        if (type === 'add') {
            setTaskList((prev) =>
                [...prev, {
                    key: new Date().getTime(),
                    desc: currentTask
                }]
            )
            setCurrentTask('')
        }
    }

    return (
        <div>
            <div>
                <input value={currentTask} type="text" className='commentInput' onChange={(e) => setCurrentTask(e.target.value)} />
                <button disabled={currentTask.length === 0} onClick={() => handleClick('add')} className='toDoAddBtn' >Add</button>
            </div>
            {
                taskList?.length ? taskList.map((task) => {
                    const { key, desc } = task
                    return (
                        <div key={key} className='taskList' >
                            <div style={{
                                display: 'flex'
                            }}>
                                <input type="checkbox" />
                                <p>{desc}</p>
                            </div>
                            <div>
                                <button onClick={() => onEdit(task)} className='taskEditBtn' >Edit</button>
                            </div>
                        </div>
                    )
                }) : <></>
            }
        </div>
    )
}

export default ToDoList