import React, { useState } from "react";
import api from '../services/api';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    api.post("contacts/", form)
      .then(() => alert("Message sent!"))
      .catch(() => alert("Error sending message."));
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required rows={5} />
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;