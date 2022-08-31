import FormContact from './FormContact';
import { Container } from './styles';
import Image from '../../assets/Contact.svg';

function Contact() {
  return (
    <Container>
      <h2>Entre em contato comigo...</h2>
      <span>Me envie uma mensagem pelo formulário!</span>
      <div>
        <div className="image">
          <Image className="email" />
        </div>
        <FormContact />
      </div>
    </Container>
  );
}

export default Contact;
