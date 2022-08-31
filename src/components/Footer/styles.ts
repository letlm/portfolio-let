import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 10rem;
  border-top: 1px solid ${(props) => props.theme.colors.detailsFive};
  height: 5rem;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
  }
`;
