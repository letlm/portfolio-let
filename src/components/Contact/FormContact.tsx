import { ContainerForm, Input, Message } from './styles';

import emailjs from 'emailjs-com';

function FormContact() {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_gmail',
        'template_mxdj0tf',
        e.target,
        'R9Tyzm7cdUt74hU3H',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    e.target.reset();
  };

  return (
    <ContainerForm
      onSubmit={sendEmail}
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <Input placeholder="Seu nome" required name="from_name" />
      <Input placeholder="Seu e-mail" type="email" required name="user_email" />
      <Message placeholder="Mensagem" required name="message" />
      <button type="submit" value="Submit">
        Enviar mensagem
      </button>
    </ContainerForm>
  );
}

export default FormContact;
