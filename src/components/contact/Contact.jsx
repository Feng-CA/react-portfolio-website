import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {AiOutlineLinkedin} from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wzhwcrk', 'template_t1cewuj', form.current, 'BTyvEc3RVxZktGxR6')
    
    e.target.reset()
  };
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>fengmao1@gmail.com</h5>
            <a href="mailto:fengmao1@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon"/>
            <h4>Linkedin message</h4>
            <h5>Feng Mao</h5>
            <a href="https://linkedin.com/in/feng-mao" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact