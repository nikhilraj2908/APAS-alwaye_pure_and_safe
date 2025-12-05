import React from "react";
import { useLocation } from "react-router-dom";
import "./ReceiptPage.css";

const ReceiptPage = () => {
  const { state } = useLocation();

  if (!state) return <h2>No Receipt Found</h2>;

  const {
    orderId,
    paymentId,
    product,
    qty,
    bottleCount,
    totalAmount,
    address,
  } = state;

  return (
    <div className="receipt-outer">
      <div className="receipt-header">PAYMENT RECEIPT</div>

      <div className="receipt-container">

        <div className="receipt-row">
          <div className="receipt-section">
            <h3>Order Details</h3>
            <p><b>Order ID:</b> {orderId}</p>
            <p><b>Payment ID:</b> {paymentId}</p>
            <p><b>Date:</b> {new Date().toLocaleDateString()}</p>
          </div>

          <div className="receipt-section">
            <h3>Product & Quantity</h3>
            <p><b>Product:</b> {product}</p>
            <p><b>Quantity:</b> {qty} peti</p>
            <p><b>Total Bottles:</b> {bottleCount}</p>
          </div>
        </div>

        <hr />

        <div className="receipt-section">
          <h3>Financial Summary</h3>
          <p><b>Total Amount:</b> ₹{totalAmount}</p>
        </div>

        <hr />

        <div className="receipt-section">
          <h3>Shipping Information</h3>
          <p><b>Address:</b> {address}</p>
        </div>

        <div className="download-area">
          <button className="download-btn" onClick={() => window.print()}>
            DOWNLOAD RECEIPT
          </button>
        </div>

      </div>
    </div>
  );
};

export default ReceiptPage;
