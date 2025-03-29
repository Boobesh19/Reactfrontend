import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Osaka Private Limited</h1>
        <p>
          We provide top-notch logistics and shipping services, specializing in Japan. 
          Our mission is to ensure seamless trading and shipping operations, getting your 
          goods to their destination efficiently and securely.
        </p>
      </section>

      {/* Services Section */}
      <section className="service-section">
        <h2>Comprehensive Logistics Services for Business Growth</h2>
        <p>
          Combining cutting-edge logistics technology with high-quality service, we provide 
          the ideal logistics solutions to help businesses scale.
        </p>
        <p>🚚 Transportation Services</p>
        <p> 📦 Supply Chain Management</p>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section">
        <h2>Why Choose Osaka Private Limited?</h2>
        <ul>
          <p>
            <b>📌 Reliable Logistics Solutions</b>
            <p>We ensure safe and timely transport of goods with efficiency.</p>
          </p>
          <p>
            <b>🌍 Global Shipping Expertise</b>
            <p>Years of experience in international trade logistics.</p>
          </p>
          <p>
            <b>🚀 Innovative Technology</b>
            <p>We use real-time tracking and efficient management tools.</p>
          </p>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>📞 Contact Us</h2>
        <p><b>📍 Address:</b> B1, Industrial Estate, Velachery, Chennai, Tamil Nadu.</p>
        <p><b>✉️ Email:</b> osakapvtltd@gmail.com</p>
        <p><b>📞 Phone:</b> 7708799000, 7708796000</p>
      </section>
    </div>
  );
};

export default Home;
