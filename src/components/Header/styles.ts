import styled from 'styled-components';

interface INavLink {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.detailsFive};

  ul {
    margin-left: 50px;
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const NavLinkContainer = styled.li<INavLink>`
  a {
    color: ${(props) =>
      props.isActive
        ? props.theme.colors.detailsOne
        : props.theme.colors.textOne};
    transition: 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.textThree};
      transition: 0.5s;
    }
  }
`;
