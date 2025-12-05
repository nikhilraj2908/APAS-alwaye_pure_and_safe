import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <h2>No Order Found</h2>;

  const {
    product,
    qty,
    bottleCount,
    bottlesPerPeti,
    address,
    perPetiPrice,
    totalAmount,
  } = state;

  const handlePayment = async () => {
    try {
      // 1️⃣ Create Razorpay Order on backend
      const res = await fetch("http://localhost:5000/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product,
          qty,
          bottleCount,
          bottlesPerPeti,
          address,
          perPetiPrice,
          totalAmount,
        }),
      });

      const orderData = await res.json();

      console.log("BACKEND ORDER RESPONSE:", orderData);

      if (!orderData.success) {
        alert("Order creation failed on backend");
        return;
      }

      // 2️⃣ Razorpay popup config
      const options = {
        key: orderData.key,                  // <-- backend must return key_id
        amount: orderData.order.amount,      // <-- backend must return order.amount
        currency: "INR",
        name: "APAS Water Bottles",
        description: "Bottle Order Payment",

        order_id: orderData.order.id,        // <-- backend must return order.id

        handler: async function (response: any) {
          // 3️⃣ Verify payment after success
          const verifyRes = await fetch(
            "http://localhost:5000/api/orders/verify",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }),
            }
          );

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            navigate("/receipt", {
              state: {
                product,
                qty,
                bottleCount,
                bottlesPerPeti,
                address,
                perPetiPrice,
                totalAmount,
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
              },
            });
          } else {
            alert("Payment verification failed");
          }
        },

        theme: {
          color: "#007bff",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.log("Payment Error:", err);
      alert("Payment Failed");
    }
  };

  return (
    <div className="payment-page">
      <h2>Final Payment</h2>

      <p>
        Product: <b>{product}</b>
      </p>
      <p>
        Quantity: <b>{qty} peti</b>
      </p>
      <p>
        Total Bottles: <b>{bottleCount}</b>
      </p>
      <p>
        Total Amount: <b>₹{totalAmount}</b>
      </p>

      <button className="order-btn" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
