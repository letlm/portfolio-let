import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerForm = styled.form`
  margin-top: 8rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  button {
    border: none;
    padding: 1rem 2.5rem;
    color: white;
    font-weight: 300;
    font-size: 1rem;
    border-radius: 1rem;
    background-color: black;
    transition: 0.5s;

    &:disabled {
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      background-color: aliceblue;
    }
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  border: 1ps solid black;
  padding: 1.7rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  color: antiquewhite;
  outline: none;
  transition: 0.5s;

  &:focus {
    border-color: white;
  }

  &::placeholder {
    color: purple;
  }
`;

export const Message = styled.textarea`
  height: 10rem;
  width: 100%;
  border: 1ps solid black;
  padding: 1.7rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  color: antiquewhite;
  outline: none;
  transition: 0.5s;
  resize: none;

  grid-column: 1 / 3;

  &:focus {
    border-color: white;
  }

  &::placeholder {
    color: purple;
  }
`;
