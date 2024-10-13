import React, { useState } from "react";

const BillingShippingForm = () => {
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  return (
    <form>
      <h2>Billing and Shipping Information</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={billingInfo.name} onChange={handleChange} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" name="address" value={billingInfo.address} onChange={handleChange} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" value={billingInfo.city} onChange={handleChange} />
      </div>
      <div>
        <label>ZIP:</label>
        <input type="text" name="zip" value={billingInfo.zip} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BillingShippingForm;
