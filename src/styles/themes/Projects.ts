import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 5rem;
    /* flex-direction: column; */
    gap: 1rem;
  }
`;
