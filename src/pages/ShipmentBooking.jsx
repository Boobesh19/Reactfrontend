import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./SBooking.css"; // Ensure CSS is properly styled

// Validation Schema using Zod
const shipmentSchema = z.object({
  senderName: z.string().min(2, "Sender's name must be at least 2 characters"),
  receiverName: z.string().min(2, "Receiver's name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  packageDetails: z.string().min(5, "Please provide package details"),
});

function ShipmentBooking() {
  const [submissionMessage, setSubmissionMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(shipmentSchema),
  });

  const onSubmit = async (data) => {
    console.log("Form submitted!");  // Log when the form is submitted
    console.log("Form Data:", data);  // Log the form data before conversion

    try {
      // Convert the data to JSON format
      const jsonData = JSON.stringify(data, null, 2);
      console.log("Converted JSON Data:", jsonData); // Log converted JSON

      // Send data to backend (or save to local JSON file for now)
      const response = await fetch("/api/saveShipment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonData,
      });

      if (response.ok) {
        console.log("Data successfully sent to backend."); // Log success
        setSubmissionMessage("Shipment booking successful! Data saved.");
        reset();
      } else {
        console.log("Failed to save shipment data."); // Log failure
        setSubmissionMessage("Error saving shipment data.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmissionMessage("Error saving shipment data.");
    }
  };

  return (
    <div className="shipment-container">
      <h2>Shipment Booking</h2>
      {submissionMessage && <p className="message">{submissionMessage}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Sender's Name</label>
        <input {...register("senderName")} placeholder="John Doe" />
        {errors.senderName && <p className="error">{errors.senderName.message}</p>}

        <label>Receiver's Name</label>
        <input {...register("receiverName")} placeholder="Jane Doe" />
        {errors.receiverName && <p className="error">{errors.receiverName.message}</p>}

        <label>Email</label>
        <input {...register("email")} placeholder="example@mail.com" />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label>Phone Number</label>
        <input {...register("phone")} placeholder="1234567890" />
        {errors.phone && <p className="error">{errors.phone.message}</p>}

        <label>Address</label>
        <textarea {...register("address")} placeholder="Street, City, Zip Code" />
        {errors.address && <p className="error">{errors.address.message}</p>}

        <label>Package Details</label>
        <textarea {...register("packageDetails")} placeholder="Describe your package" />
        {errors.packageDetails && <p className="error">{errors.packageDetails.message}</p>}

        <button type="submit">Book Shipment</button>
      </form>
    </div>
  );
}

export default ShipmentBooking;
