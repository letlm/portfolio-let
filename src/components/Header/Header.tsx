import { ReactNode } from 'react';
import { NavLink } from './NavLink';

import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
      </ul>
    </Container>
  );
}