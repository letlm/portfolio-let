import styled from 'styled-components';

interface ImgProjects {
  imgUrl: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  margin-bottom: 20px;

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 4rem;
    @media (max-width: 1000px) {
      gap: 2rem;
    }
  }
`;

export const DoneProject = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 30rem;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Project = styled.div<ImgProjects>`
  background: url(${(props) => props.imgUrl}) no-repeat;
  background-size: contain;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;
