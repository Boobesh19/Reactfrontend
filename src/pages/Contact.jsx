import React, { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container">
      <div className="ST-container">
        <form onSubmit={handleSubmit}>
          <h1>Contact</h1>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
          <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    
      {/* Contact Section */}
      <section>
        <h2>📞 Contact Us</h2>
        <p><b>📍 Address:</b> B1, Industrial Estate, Velachery, Chennai, Tamil Nadu.</p>
        <p><b>✉️ Email:</b> osakapvtltd@gmail.com</p>
        <p><b>📞 Phone:</b> 7708799000, 7708796000</p>
      </section>
    </div>

      
  );
};

export default Contact;
