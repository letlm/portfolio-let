import { NavLink } from '../Header/NavLink';

import { Container } from '../Header/styles';

function HeaderProjects() {
  return (
    <Container>
      <ul>
        <NavLink title="Voltar para o início" path="/" />
      </ul>
    </Container>
  );
}

export default HeaderProjects;
