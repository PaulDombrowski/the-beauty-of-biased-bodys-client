import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
export const ContactUs = () => {
    
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qebwe7d', 'template_swvf2zs', form.current, 'MKwj3P52muQES1D_5')
      .then(() => {
          setIsEmailSent(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  if (isEmailSent) {
    return <div>Vielen Dank für Ihre Nachricht!</div>;
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;






