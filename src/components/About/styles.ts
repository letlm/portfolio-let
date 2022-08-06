import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  .image {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    .img-leticia {
      border-radius: 50em;
      border: 80px solid #000000;
    }
  }

  .about {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: start;
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;

  h3,
  p {
    width: 400px;
    font-size: 1.4rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.textOne};
  }

  p {
    color: ${({ theme }) => theme.colors.textTwo};
  }

  .buttons {
    width: 400px;
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;

    .btnAbout {
      margin-right: 10px;
      background-color: ${({ theme }) => theme.colors.detailsThree};
      border: 2px solid ${({ theme }) => theme.colors.detailsThree};
      border-radius: 50px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 130px;
      height: 40px;
      font-weight: 600;
      font-family: 'Poppins' sans-serif;
      color: ${({ theme }) => theme.colors.backgroundOne};
      position: relative;
      overflow: hidden;

      :hover::before {
        transform: scaleX(1);
      }

      :hover {
        color: ${({ theme }) => theme.colors.detailsThree};
      }
      .content {
        position: relative;
        z-index: 1;
      }

      ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        transform: scaleX(0);
        transform-origin: 0 50%;
        width: 100%;
        height: inherit;
        border-radius: inherit;
        background-color: ${({ theme }) => theme.colors.backgroundOne};
        transition: all 0.475s;
      }
    }

    .btnDownload {
      margin-right: 10px;
      position: relative;
      overflow: hidden;
      background-color: ${({ theme }) => theme.colors.detailsThree};
      border: 2px solid ${({ theme }) => theme.colors.detailsThree};
      border-radius: 50px;
      font-weight: 600;
      font-family: 'Poppins' sans-serif;
      color: ${({ theme }) => theme.colors.backgroundOne};
      display: inline-block;
      width: 130px;
      height: 40px;
      touch-action: manipulation;

      span:first-child {
        position: relative;
        transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
        z-index: 10;
      }

      span:last-child {
        color: ${({ theme }) => theme.colors.detailsThree};
        display: block;
        position: absolute;
        bottom: 0;
        transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
        z-index: 100;
        opacity: 0;
        top: 50%;
        left: 50%;
        transform: translateY(225%) translateX(-50%);
        height: 14px;
        line-height: 13px;
      }

      :after {
        content: '';
        position: absolute;
        bottom: -50%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.backgroundOne};
        transform-origin: bottom center;
        transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
        transform: skewY(9.3deg) scaleY(0);
        z-index: 50;
      }

      :hover:after {
        transform-origin: bottom center;
        transform: skewY(9.3deg) scaleY(2);
      }

      :hover span:last-child {
        transform: translateX(-50%) translateY(-50%);
        opacity: 1;
        transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
      }
    }
  }

  .icons {
    width: 400px;
    display: flex;

    .btnHome {
      border: none;
      color: ${({ theme }) => theme.colors.textOne};
      background-color: transparent;
      margin-right: 10px;
    }

    .btnHome a {
      :hover {
        color: ${({ theme }) => theme.colors.detailsThree};
      }
    }
  }
`;
