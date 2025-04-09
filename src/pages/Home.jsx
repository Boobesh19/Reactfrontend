import React from "react";

const Home = () => {
  return (
    <section className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Osaka Private Limited</h1>
        <p>
          We provide top-notch logistics and shipping services, specializing in Japan. 
          Our mission is to ensure seamless trading and shipping operations, getting your 
          goods to their destination efficiently and securely.
        </p>
      </div>

      {/* Services Section */}
      <div className="service-section">
        <h2>Comprehensive Logistics Services for Business Growth</h2>
        <p>
          Combining cutting-edge logistics technology with high-quality service, we provide 
          the ideal logistics solutions to help businesses scale.
        </p>
        <p>🚚 Transportation Services</p>
        <p> 📦 Supply Chain Management</p>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-us-section">
        <h2>Why Choose Osaka Private Limited?</h2>
        <ul>
          <p>
            <b>📌 Reliable Logistics Solutions</b>
            <span>We ensure safe and timely transport of goods with efficiency.</span>
          </p>
          <p>
            <b>🌍 Global Shipping Expertise</b>
            <span>Years of experience in international trade logistics.</span>
          </p>
          <p>
            <b>🚀 Innovative Technology</b>
            <span>We use real-time tracking and efficient management tools.</span>
          </p>
        </ul>
      </div>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>📞 Contact Us</h2>
        <p><b>📍 Address:</b> B1, Industrial Estate, Velachery, Chennai, Tamil Nadu.</p>
        <p><b>✉️ Email:</b> osakapvtltd@gmail.com</p>
        <p><b>📞 Phone:</b> 7708799000, 7708796000</p>
      </section>
    </section>
  );
};

export default Home;
