import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button';

const ContactForm = () => {
  const form = useRef();
  const [show, setShow] = useState(false);
  const [nameMissing, setNameMissing] = useState('')
  const [mailMissing, setMailMissing] = useState('')
  const [msgMissing, setMsgMissing] = useState('')
  const handleSubmit = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }

  const sendEmail = (e) => {
    console.log(e.target[0].value)
    e.preventDefault();
    if (!e.target[0].value) {
      setNameMissing('Name is missing')
    }if (!e.target[1].value) {
      setMailMissing('Email is missing')
    }if (!e.target[2].value) {
      setMsgMissing('Message is missing')
    }
    if (e.target[0].value && e.target[1].value && e.target[2].value) {
      emailjs.sendForm(
        // 'service_md3l1kc',
        'template_pqa1k5e',
        form.current,
        'FE_nPFGd886-lWOyD')
        .then((result) => {
            console.log(result.text);
              handleSubmit()
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset()
        setMailMissing('')
        setMsgMissing('')
        setNameMissing('')
    }
  };

  return (
    <div className='contact-form' id='contact-anchor'>
      <div className='form-box'>
        <h1>Contact Form</h1>
        <form className='form' ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <p>{nameMissing}</p>
          <label>Email</label>
          <input type="email" name="user_email" />
          <p>{mailMissing}</p>
          <label>Message</label>
          <textarea name="message" />
          <p>{msgMissing}</p>
          <div>
            <Button text='Send' />
          </div>
        </form>
      </div>
      {show && <div className='email-sent'><h1>Email sent! Thank you!</h1></div>}
    </div>
  );
};


export default ContactForm
