import React, { useState } from "react";

const ShipmentTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);

  const handleChange = (e) => {
    setTrackingNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!trackingNumber) {
      alert("Please enter a valid tracking number.");
      return;
    }

    // Simulated tracking response
    setTrackingResult({
      trackingNumber,
      status: "In Transit",
      estimatedDelivery: "3-5 Business Days",
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="tracking-number"><b>Tracking Number:</b></label>
        <input
          type="text"
          id="tracking-number"
          name="trackingNumber"
          value={trackingNumber}
          onChange={handleChange}
          required
        />
        <button type="submit">Track Shipment</button>
      </form>

      {trackingResult && (
        <div className="tracking-result">
          <h3>Tracking Details:</h3>
          <p><b>Tracking Number:</b> {trackingResult.trackingNumber}</p>
          <p><b>Status:</b> {trackingResult.status}</p>
          <p><b>Estimated Delivery:</b> {trackingResult.estimatedDelivery}</p>
        </div>
      )}

      {/* Contact Section */}
      <section>
        <h2>📞 Contact Us</h2>
        <p><b>📍 Address:</b> B1, Industrial Estate, Velachery, Chennai, Tamil Nadu.</p>
        <p><b>✉️ Email:</b> osakapvtltd@gmail.com</p>
        <p><b>📞 Phone:</b> 7708799000, 7708796000</p>
      </section>

      <img src="/src/assets/images/red-circle-logo.jpg" alt="Osaka Private Limited Logo" width="200" height="200" style={{ display: "block", margin: "auto" }}/>
    </div>
  );
};

export default ShipmentTracking;