import { ToDoTask } from "../../components/ToDoTask";
import { Container, ToDoButton, ToDoList } from "./styles";

export function Home() {
  return (
    <Container>
      <ToDoButton>
        To Do List<span className="square"></span>
      </ToDoButton>
      <ToDoList>
        {Array.from({length: 10}).map((_, i) => <ToDoTask key={i} />)}
      </ToDoList>
    </Container>
  )
}
