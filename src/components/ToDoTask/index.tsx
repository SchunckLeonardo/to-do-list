import { Check, X } from "@phosphor-icons/react";
import { BoxContainer, StatusTask } from "./styles";
import { Task } from "../../context/TaskContext";
import { useTask } from "../../hooks/useTask";

interface ToDoTaskProps {
  task: Task
}

export function ToDoTask({ task }: ToDoTaskProps) {
  const { doneTask, removeTask } = useTask()

  return (
    <BoxContainer priority={task.priority}>
      <h3>{task.name}</h3>
      <StatusTask>
        <input value={task.status} type="text" readOnly />
        <button onClick={() => doneTask(task)}>
          <Check />
        </button>
        <button onClick={() => removeTask(task)}>
          <X />
        </button>
        <span></span>
      </StatusTask>
    </BoxContainer>
  )
}
