import styled from 'styled-components';

interface ImgProjects {
  imgUrl: string;
}

export const Container = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5rem;

  h2 {
    width: 95%;
    font-size: 2rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.textOne};

    @media (max-width: 600px) {
      margin-bottom: 0px;
    }
  }

  section {
    width: 95%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    gap: 4rem;

    @media (max-width: 1000px) {
      margin-top: -50px;
      gap: 2rem;
    }

    @media (max-width: 1000px) {
      flex-wrap: wrap;
    }
  }
  .div {
    width: 95%;
    display: flex;
    justify-content: flex-end;

    .button {
      width: 150px;
      height: 40px;
      border: none;
      background: none;

      @media (max-width: 600px) {
        margin-top: -30px;
        /* margin-bottom: -100px; */
      }
    }

    .button a {
      padding-bottom: 7px;
      font-size: 1.4rem;
      padding-right: 15px;
    }

    .button span {
      transform: translateX(-8px);
      transition: all 0.3s ease;
    }

    .more {
      position: relative;
      color: ${({ theme }) => theme.colors.detailsThree};
      padding-bottom: 20px;
    }

    .more:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1.8px;
      bottom: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.detailsThree};
      transition: transform 0.25s ease-out;
    }

    .button:hover .more:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    .icon {
      color: ${({ theme }) => theme.colors.detailsThree};
    }
  }
`;

export const DoneProject = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 280px;
  justify-content: space-around;
  border: 2px solid ${({ theme }) => theme.colors.textThree};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.detailsFour};
  position: relative;
  padding: 1.8rem;
  transition: 0.5s ease-out;
  overflow: visible;

  :hover {
    border-color: ${({ theme }) => theme.colors.textOne};
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .infos {
    transform: translate(-50%, 125%);
    width: 60%;
    border-radius: 1rem;
    border: none;
    background: ${({ theme }) => theme.colors.reverse};
    font-size: 1rem;
    padding: 0.5rem 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease-out;

    button {
      background-color: transparent;
      border: none;
      width: 50%;
      font-size: 1rem;

      :hover {
        transition: 0.5s;
        transform: scale(1.2);
      }

      a {
        color: ${({ theme }) => theme.colors.inverse};

        :hover {
          opacity: 0.5;
        }
      }
    }
  }
  :hover .infos {
    transform: translate(-50%, 50%);
    opacity: 1;
  }

  .text {
    h1 {
      margin-bottom: 10px;
    }
    span {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.textThree};
    }
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    height: 350px;
    width: 300px;
  }
`;

export const Project = styled.div<ImgProjects>`
  background: url(${(props) => props.imgUrl}) no-repeat;
  background-size: contain;
  height: 80%;
  border-radius: 8px;
`;
