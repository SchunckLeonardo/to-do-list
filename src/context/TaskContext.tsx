import { produce } from "immer";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface Task {
  name: string
  priority: Priority
  status: 'done' | 'pending'
}

// eslint-disable-next-line react-refresh/only-export-components
export enum Priority {
  normal,
  important,
  most
}

interface TaskContextType {
  listTasks: Task[]
  addNewTask: (name: string, priority: Priority) => void
  doneTask: (task: Task) => void
  removeTask: (task: Task) => void
}

export const TaskContext = createContext({} as TaskContextType)

interface TaskContextProviderProps {
  children: ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [listTasks, setListTasks] = useState<Task[]>(() => {
    const tasksExisted = sessionStorage.getItem('tasks')
    if(tasksExisted) {
      return JSON.parse(tasksExisted)
    } else {
      return []
    }

  })

  useEffect(() => {
    sessionStorage.setItem('tasks', JSON.stringify(listTasks))
  }, [listTasks])

  const addNewTask = (name: string, priority: Priority) => {
    if (name === '') {
      return
    }
    const newTask = produce(listTasks, (draft) => {
      draft.push({
        name,
        priority,
        status: 'pending'
      })
    })
    setListTasks(newTask)
  }

  const doneTask = (task: Task) => {
    const updatedTasks = listTasks.map(t =>
      t.name === task.name ? {...t, status: "done" as 'done' | 'pending'} : t
    );
    setListTasks(updatedTasks);
  }

  const removeTask = (task: Task) => {
    const tasksWithoutRemoved = listTasks.filter(t => t.name !== task.name)
    setListTasks(tasksWithoutRemoved)
  }

  return (
    <TaskContext.Provider value={{listTasks, addNewTask, doneTask, removeTask}}>
      {children}
    </TaskContext.Provider>
  )
}
