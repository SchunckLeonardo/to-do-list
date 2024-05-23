import styled from "styled-components";

export const Container = styled.main`
  width: 39rem;
  margin: 2rem auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${p => p.theme['green']};
  border-radius: 10px;
  box-shadow: 12px 12px 0px ${p => p.theme['black']};
`

export const ToDoButton = styled.button`
  position: relative;
  width: 100%;
  height: 92px;
  font-size: 2.8rem;
  font-family: 'fs-gravity';
  background-color: ${p => p.theme['yellow-800']};
  border: 3px solid ${p => p.theme['black']};
  transform-style: preserve-3d;
  cursor: pointer;
  transition: transform .25s;

  .square {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    background-color: ${p => p.theme['orange']};
    transform: translateZ(-1px);
  }
`

export const ToDoList = styled.div`
  margin-top: 3.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`
