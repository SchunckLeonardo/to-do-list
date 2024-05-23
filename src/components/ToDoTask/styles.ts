import styled from "styled-components";

export const BoxContainer = styled.section`
  background-color: ${(p) => p.theme["yellow-100"]};
  padding: 1rem;
  height: 9rem;
  border-radius: 10px;
  padding-top: 4rem;
  position: relative;
  transform-style: preserve-3d;
  border: 2px solid #000;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 3px;
    left: 3px;
    background-color: ${(p) => p.theme["orange"]};
    border-radius: 10px;
    border: 2px solid #000;
    transform: translateZ(-2px);
  }
`;

export const StatusTask = styled.div`
  width: 100%;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -70px;
  left: 30px;

  span {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(p) => p.theme["orange"]};
    top: 5px;
    left: 5px;
    z-index: -1;
  }

  input {
    background-color: ${(p) => p.theme["yellow-800"]};
    border: 2px solid #000;
    height: 100%;
    width: 100%;
    padding-left: 1rem;
  }

  button {
    background-color: ${(p) => p.theme["yellow-100"]};
    height: 100%;
    border: 2px solid #000;
    line-height: 0;
    width: 15%;
    cursor: pointer;

    &:hover {
      filter: brightness(0.90);
    }
  }
`;
