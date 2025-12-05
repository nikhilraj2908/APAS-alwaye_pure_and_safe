import React, { useState } from "react";
import "./OrderPage.css";
import { useNavigate } from "react-router-dom";

const PRICE_LIST = {
  pyramid: [
    { min: 0, max: 20, price: 195 },
    { min: 21, max: 50, price: 185 },
    { min: 51, max: 9999, price: 175 },
  ],
  billionaire: [
    { min: 0, max: 20, price: 180 },
    { min: 21, max: 50, price: 170 },
    { min: 51, max: 9999, price: 160 },
  ],
  cylindrical: [
    { min: 0, max: 20, price: 175 },
    { min: 21, max: 50, price: 165 },
    { min: 51, max: 9999, price: 155 },
  ],
  normal1L: 120,
  normal500: 150,
  normal250: 170,
};

// bottles per peti
const BOTTLES_PER_PETI = {
  pyramid: 13,
  billionaire: 12,
  cylindrical: 12,
  normal1L: 12,
  normal500: 24,
  normal250: 40,
};

function calculatePrice(prod: string, qty: number) {
  if (prod === "pyramid" || prod === "billionaire" || prod === "cylindrical") {
    const slab = PRICE_LIST[prod].find((s) => qty >= s.min && qty <= s.max);
    return slab ? slab.price : 0;
  }

  if (prod === "normal1L") return PRICE_LIST.normal1L;
  if (prod === "normal500") return PRICE_LIST.normal500;
  if (prod === "normal250") return PRICE_LIST.normal250;

  return 0;
}

const OrderPage: React.FC = () => {
  const [product, setProduct] = useState("");
  const [qty, setQty] = useState(0);
  const [address, setAddress] = useState("");

  const perPetiPrice = calculatePrice(product, qty);
  const totalAmount = perPetiPrice * qty;

  // bottle calculations
  const bottleCount =
    product && qty > 0 ? BOTTLES_PER_PETI[product as keyof typeof BOTTLES_PER_PETI] * qty : 0;

  const bottlesPerPeti =
    product ? BOTTLES_PER_PETI[product as keyof typeof BOTTLES_PER_PETI] : 0;

  const handleOrder = () => {
    if (!product || qty === 0 || !address) {
      alert("Please fill all details before placing the order.");
      return;
    }

    alert(
      `Order Created!\n\nProduct: ${product}\nQuantity: ${qty} peti\nTotal Bottles: ${bottleCount}\nTotal Price: ₹${totalAmount}`
    );
  };

  const navigate = useNavigate();
  return (
    <div className="order-container">

      {/* PRICE LIST */}
      <div className="price-list-box">
        <h2>APAS Water Bottle Price List</h2>

        <table className="price-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>0–20</th>
              <th>21–50</th>
              <th>51+</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Pyramid Shape (1L)</td>
              <td>₹195</td>
              <td>₹185</td>
              <td>₹175</td>
            </tr>
            <tr>
              <td>Billionaire Shape (1L)</td>
              <td>₹180</td>
              <td>₹170</td>
              <td>₹160</td>
            </tr>
            <tr>
              <td>Cylindrical Shape (1L)</td>
              <td>₹175</td>
              <td>₹165</td>
              <td>₹155</td>
            </tr>
          </tbody>
        </table>

      <div  className="d-flex justify-content-around">

            <div>
          <h4>Normal Bottles Price</h4>
        <p>1L Normal - ₹120 per peti</p>
        <p>500 ml Normal – ₹150 per peti</p>
        <p>250 ml Normal – ₹170 per peti</p>

      </div>
       <div>
         <h4 className="">Bottles per Peti</h4>
        <p>Pyramid – 13 bottles</p>
        <p>Billionaire, Cylindrical, 1L Normal  – 12 bottles</p>
        <p>500 ml Normal – 24 bottles</p>
        <p>250 ml Normal – 40 bottles</p>
       </div>
      </div>
      </div>

      {/* ORDER FORM */}
      <div className="order-form">
        <h2>Place Your Order</h2>

        <label>Select Product</label>
        <select value={product} onChange={(e) => setProduct(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="pyramid">1L Customize Pyramid Shape</option>
          <option value="billionaire">1L Customize Billionaire Shape</option>
          <option value="cylindrical">1L Customize Cylindrical Shape</option>
          <option value="normal1L">1L Normal Bottle</option>
          <option value="normal500">500 ML Normal Bottle</option>
          <option value="normal250">250 ML Normal Bottle</option>
        </select>

        <label>Enter Quantity (Peti)</label>
        <input
          type="number"
          min="1"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
        />

        {/* BOTTLE COUNT BOX */}
        {product && qty > 0 && (
          <div className="bottle-box">
            <p>Bottles per Peti: <strong>{bottlesPerPeti}</strong></p>
            <p>Total Bottles: <strong>{bottleCount}</strong></p>
          </div>
        )}

        <label>Delivery Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your complete address"
        />

        <div className="price-box">
          <p>Price Per Peti: <strong>₹{perPetiPrice || 0}</strong></p>
          <p>Total Amount: <strong>₹{totalAmount || 0}</strong></p>
        </div>

        <button
            className="order-btn"
            onClick={() =>
                navigate("/payment", {
                state: {
                    product,
                    qty,
                    bottleCount,
                    bottlesPerPeti,
                    address,
                    perPetiPrice,
                    totalAmount,
                },
                })
            }
            >
            Confirm & Proceed to Payment
        </button>

      </div>
    </div>
  );
};

export default OrderPage;
