import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0% {
		opacity: 0;
		transform: translateY(-50px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}

`;

export const Container = styled.div`
  width: 23%;
`;

export const Context = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  animation: ${appear} 1.5s ease 0s 1 normal forwards;

  span {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Projects = styled.div`
  height: 350px;
  width: 270px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.detailsSix};
  border: 2px solid ${({ theme }) => theme.colors.detailsFour};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  :hover {
    box-shadow: 10px 10px 9px -2px rgb(252, 98, 153);
    border: 2px solid ${({ theme }) => theme.colors.detailsOne};
  }
`;

export const Figure = styled.figure`
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  img {
    width: 240px;
    height: 180px;
    border-radius: 8px;

    transition: 0.3s;
  }

  figcaption {
    margin-top: 5px;
    font-size: 18px;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.textOne};
    text-shadow: 8ex;
  }

  #efect {
    width: 240px;
    height: 180px;
  }

  #comentario {
    width: 235px;
    height: 180px;
    text-align: center;
    position: relative;
    top: -184px;
    left: 4px;
    color: ${({ theme }) => theme.colors.textOne};
    line-height: 20px;
    font-weight: 500;
    display: block;
    opacity: 0;
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;
  }

  #efect:hover img {
    opacity: 0.2;
  }

  #efect:hover #comentario {
    opacity: 1;
  }

  .buttons {
    width: 240px;
    margin-top: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
  }

  .button {
    border: 1px solid ${({ theme }) => theme.colors.detailsOne};
    color: ${({ theme }) => theme.colors.reverse};
    border-radius: 4px;
    width: 100px;
    height: 30px;
    margin-right: 10px;
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.colors.textOne};
    transition: 0.2s;
  }

  .button:hover {
    color: ${({ theme }) => theme.colors.inverse};
    transform: translate(-0.25rem, -0.25rem);
    background: ${({ theme }) => theme.colors.reverse};
    border: 1px solid ${({ theme }) => theme.colors.reverse};
    box-shadow: 0.25rem 0.25rem ${({ theme }) => theme.colors.detailsOne};
  }

  .button:active {
    transform: translate(0);
    box-shadow: none;
  }

  .techsDiv {
    margin-top: 5px;
    display: flex;
    width: 100%;
    height: 25px;
    justify-content: flex-start;
    color: ${({ theme }) => theme.colors.textTwo};
  }
`;
