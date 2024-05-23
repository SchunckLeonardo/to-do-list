import { Check, X } from "@phosphor-icons/react";
import { BoxContainer, StatusTask } from "./styles";

export function ToDoTask() {
  return (
    <BoxContainer>
      <h3>Lavar louça</h3>
      <StatusTask>
        <input value="Concluído" type="text" readOnly />
        <button>
          <Check />
        </button>
        <button>
          <X />
        </button>
        <span></span>
      </StatusTask>
    </BoxContainer>
  )
}
