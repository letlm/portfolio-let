import { ContainerForm, Input, Message } from './styles';

function FormContact() {
  return (
    <ContainerForm>
      <Input placeholder="Nome" required />
      <Input placeholder="E-mail" type="email" required />
      <Message placeholder="Mensagem" required />
      <button type="submit">Enviar mensagem</button>
    </ContainerForm>
  );
}

export default FormContact;
