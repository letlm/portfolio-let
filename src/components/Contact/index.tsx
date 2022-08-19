import FormContact from './FormContact';
import { Container } from './styles';

export function Contact() {
  return (
    <Container>
      <h1>Contact</h1>
      <span>Entre em contato como pelo formulário abaixo!</span>
      <FormContact />
    </Container>
  );
}
