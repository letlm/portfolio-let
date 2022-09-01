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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    width: 95%;
    font-size: 2rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.textOne};
  }

  .resume {
    width: 95%;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.detailsFour};
    background-color: ${({ theme }) => theme.colors.detailsSix};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      width: 90%;
      font-size: 1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.textTwo};
    }
  }

  .card {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 95%;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.backgroundThree};
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.detailsFour};
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
    box-shadow: -12px 12px 2px -1px ${({ theme }) => theme.colors.detailsFour};
  }

  .techs {
    width: 95%;
    margin-top: 40px;
    height: 250px;
    display: flex;
    border-radius: 4px;
    justify-content: space-around;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.backgroundThree};
    border: 2px solid ${({ theme }) => theme.colors.detailsThree};

    span {
      width: 30%;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.textTwo};
      font-family: 'Poppins', sans-serif;
    }

    .imgs {
      display: flex;
      width: 67%;
      gap: 1vh;
      flex-wrap: wrap;
      flex-direction: row;
    }
  }

  @media (max-width: 800px) {
    .resume {
      width: 95%;
    }

    .card {
      width: 95%;
    }

    .techs {
      height: 300px;
      width: 95%;
      flex-direction: column;

      span {
        width: 100%;

        font-size: 1rem;
      }

      .imgs {
        display: flex;
        width: 95%;
        gap: 1vh;
        justify-content: center;
      }
    }
  }

  @media (max-width: 500px) {
    .resume {
      width: 95%;
    }

    .card {
      height: 380px;
      p {
        font-size: 1.1rem;
      }
    }

    .techs {
      height: 400px;
    }
  }

  @media (max-width: 400px) {
    .resume {
      width: 95%;
    }

    .card {
      height: 500px;
      p {
        font-size: 1rem;
      }
    }

    .techs {
      height: 500px;
    }
  }
`;
