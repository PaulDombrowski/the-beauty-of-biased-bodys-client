import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import MovingCircle from '../components/MovingText';
import HeadTitle from '../components/Header';

const imageUrls = [
  'https://res.cloudinary.com/dy2abs6ko/image/upload/v1678308009/signal-2023-03-08-210122_016_vwqrfh.jpg',
  'https://res.cloudinary.com/dy2abs6ko/image/upload/v1678308008/signal-2023-03-08-210122_007_ta8yr7.jpg',
  'https://res.cloudinary.com/dy2abs6ko/image/upload/v1678336022/signal-2023-03-08-210122_013_gzbhvp.jpg'
];

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
    return <div className="success-message">Vielen Dank für Ihre Nachricht!</div>;
  }

  return (
    <div>
    <div> <HeadTitle/></div>
    <div className="contact-container">

      <div className="images-container">
     
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <h1>Get a shirt and support the community</h1>
        <label htmlFor="user_name">Name</label>
        <input type="text" name="user_name" id="user_name" />
        <label htmlFor="user_email">Email</label>
        <input type="email" name="user_email" id="user_email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
        <input type="submit" value="Send" />
      </form>
      <div> <MovingCircle/></div>
    </div>
    </div>


  );
};

export default ContactUs;






