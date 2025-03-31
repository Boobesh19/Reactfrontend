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
    <div className="ST-container" >
      <form onSubmit={handleSubmit}>
        <label htmlFor="tracking-number"><h1>Tracking Number:</h1></label>
        <input
          type="text"
          id="tracking-number"
          name="trackingNumber"
          placeholder="Enter your Tracking number "
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

</div>
  );
};

export default ShipmentTracking;