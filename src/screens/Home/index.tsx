import { Button, Dialog, Flex, Select } from "@radix-ui/themes";
import { ToDoTask } from "../../components/ToDoTask";
import { Container, DialogTitle, InputTask, ToDoButton, ToDoList } from "./styles";
import { X } from "@phosphor-icons/react";

export function Home() {
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
            <InputTask type="text" placeholder="Task name" />
            <Select.Root>
              <Select.Trigger placeholder="Define priority" />
              <Select.Content>
                <Select.Group>
                  <Select.Item value="normal">Normal</Select.Item>
                  <Select.Item value="important">Important</Select.Item>
                  <Select.Item value="most">I NEED DO THIS</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
            <Button>Save new task</Button>
          </Flex>

        </Dialog.Content>
      </Dialog.Root>
      <ToDoList>
        {Array.from({ length: 10 }).map((_, i) => <ToDoTask key={i} />)}
      </ToDoList>
    </Container>
  )
}
