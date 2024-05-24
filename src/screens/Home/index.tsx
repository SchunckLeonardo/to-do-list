import { Button, Dialog, Flex, Select } from "@radix-ui/themes";
import { ToDoTask } from "../../components/ToDoTask";
import { Container, DialogTitle, FormTask, InputTask, NoTasks, ToDoButton, ToDoList } from "./styles";
import { X } from "@phosphor-icons/react";
import { Priority } from "../../context/TaskContext";
import { Controller, useForm } from "react-hook-form";
import { useTask } from "../../hooks/useTask";

type TaskForm = {
  task_name: string
  task_priority: Priority
}

export function Home() {

  const { addNewTask, listTasks } = useTask()

  const {
    register,
    handleSubmit,
    control
  } = useForm<TaskForm>()

  function handleNewTask(data: TaskForm) {
    addNewTask(data.task_name, data.task_priority)
  }

  return (
    <Container>
      <Dialog.Root>
        <Dialog.Trigger>
          <ToDoButton>
            To Do List<span className="square"></span>
          </ToDoButton>
        </Dialog.Trigger>
        <Dialog.Content>
          <Flex justify="end">
            <Dialog.Close>
              <X />
            </Dialog.Close>
          </Flex>
          <DialogTitle>Add new task</DialogTitle>

          <Flex justify="center" gap="3" direction="column">
            <FormTask onSubmit={handleSubmit(handleNewTask)}>
              <InputTask {...register("task_name")} type="text" placeholder="Task name" />

              <Controller
                control={control}
                name="task_priority"
                render={({ field: { onChange } }) => (
                  <Select.Root onValueChange={onChange} >
                    <Select.Trigger placeholder="Define priority" />
                    <Select.Content>
                      <Select.Group>
                        <Select.Item value="normal">Normal</Select.Item>
                        <Select.Item value="important">Important</Select.Item>
                        <Select.Item value="most">I NEED DO THIS</Select.Item>
                      </Select.Group>
                    </Select.Content>
                  </Select.Root>
                )}
              />

              <Button>Save new task</Button>
            </FormTask>
          </Flex>

        </Dialog.Content>
      </Dialog.Root>
      <ToDoList>
        {listTasks.length < 1 ? <NoTasks>You don't have task</NoTasks> : listTasks.map((task, i) => (
          <ToDoTask key={i} task={task} />
        ))}
      </ToDoList>
    </Container>
  )
}
