import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.textOne};
  }

  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textThree};
  }

  div {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .image {
    width: 50%;
    display: flex;

    svg {
      width: 70%;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }
  }
`;

export const ContainerForm = styled.form`
  margin-top: 60px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  button {
    width: 200px;
    border: none;
    height: 40px;
    color: ${({ theme }) => theme.colors.textTwo};
    font-size: 1rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.detailsFive};
    transition: 0.5s;

    &:disabled {
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.detailsThree};
    }
  }
`;

export const Input = styled.input`
  height: 50px;
  width: 80%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.detailsTwo};
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.detailsTwo};
  outline: none;
  transition: 0.5s;
`;

export const Message = styled.textarea`
  height: 10rem;
  width: 80%;
  border: 1px solid ${({ theme }) => theme.colors.detailsTwo};
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.detailsTwo};
  outline: none;
  transition: 0.5s;
  resize: none;

  grid-column: 1 / 3;
`;
