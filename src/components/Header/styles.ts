import styled from 'styled-components';

interface INavLink {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.detailsFive};

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const NavLinkContainer = styled.li<INavLink>`
  a {
    text-transform: uppercase;
    color: ${(props) =>
      props.isActive
        ? props.theme.colors.detailsSix
        : props.theme.colors.textOne};
    transition: 0.5s;

    &:hover {
      color: ${(props) =>
        props.isActive
          ? props.theme.colors.detailsOne
          : props.theme.colors.textThree};
      transition: 0.5s;
    }
  }
`;
