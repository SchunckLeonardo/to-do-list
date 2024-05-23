import { Container, ToDoButton, ToDoList } from "./styles";

export function Home() {
  return (
    <Container>
      <ToDoButton>
        To Do List<span className="square"></span>
      </ToDoButton>
      <ToDoList>
        {/* <ToDoTask /> */}
      </ToDoList>
    </Container>
  )
}
