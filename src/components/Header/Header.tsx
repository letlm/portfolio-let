import { ReactNode } from 'react';
import { NavLink } from './NavLink';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Início" path="/" />
        <NavLink title="Resumo" path="#resume" />
        <NavLink title="Projetos" path="#projects" />
        <NavLink title="Contato" path="#contact" />
      </ul>
    </Container>
  );
}

export default Header;
