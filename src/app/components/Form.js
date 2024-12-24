import { useState } from "react";
import './Contact.css'
import Button from "./Button";

import { motion } from 'framer-motion';

function Submit() {
  return (
    <button type="submit" className="card-btn">
      <Button className="card-button">
        Send Email
      </Button>
    </button>
  );
}

function Message({ message, setMessage }) {
  return (
    <textarea 
      name="textbox"
      value={message}
      rows={4} 
      cols={40} 
      onChange={(e) => setMessage(e.target.value)} 
      placeholder="Your Message"
    />
  );
}

function Email({ email, setEmail }) {
  return (
    <input 
      name="email" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)} 
      placeholder="Your Email" 
    />
  );
}

function Name({ name, setName }) {
  return (
    <input 
      name="name" 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      placeholder="Your Name" 
    />
  );
}

async function submitForm(data) {
  console.log('Form submitted:', data);
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setPending(true);

    try {
      await submitForm({ name, email, message });
      alert('Form submitted successfully!');
    } catch (err) {
      console.error('Submission failed:', err);
      alert('Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Name name={name} setName={setName} />
      <Email name={email} setName={setEmail} />
      <Message name={message} setName={setMessage} />
      <Submit />
    </form>
  );
}
