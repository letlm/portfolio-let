import styled, { keyframes } from 'styled-components';

const myResume = keyframes`
0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;

const cardAnimation = keyframes`
	from {
		opacity: 0;
		transform: rotateX(70deg);
		transform-origin: top;
	}

	to {
		opacity: 1;
		transform: rotateX(0deg);
		transform-origin: top;
	}
`;

export const Container = styled.div`
  margin-top: -70px;
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.textOne};
  }
  .resume {
    margin-bottom: 20px;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.detailsSix};
    background-color: ${({ theme }) => theme.colors.detailsSix};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      width: 90%;
      font-size: 1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.textOne};
    }
  }

  .card {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.backgroundThree};
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.detailsSix};
    transition: all 0.2s;
    box-shadow: 12px 12px 2px 1px ${({ theme }) => theme.colors.detailsSix};
    animation: ${cardAnimation} 3s cubic-bezier(0.11, 0, 0.5, 0) 0s 1 normal
      both;

    p {
      line-height: 25px;
      width: 90%;
      color: ${({ theme }) => theme.colors.textTwo};
    }
  }

  .card:hover {
    box-shadow: -12px 12px 2px -1px ${({ theme }) => theme.colors.detailsSix};
  }

  .techs {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textThree};
    }
  }
`;