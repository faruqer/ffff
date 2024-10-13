import React from "react";

const ManufacturerInfo = ({ manufacturer }) => {
  return (
    <div>
      <h2>Manufacturer Information</h2>
      <p>Name: {manufacturer.name}</p>
      <p>Contact: {manufacturer.contact}</p>
      <p>Address: {manufacturer.address}</p>
    </div>
  );
};

export default ManufacturerInfo;
