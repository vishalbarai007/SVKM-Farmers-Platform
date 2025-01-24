import React from "react";
import { useLocation } from "react-router-dom";

const OrderConfirm = () => {
  const location = useLocation();
  const { buyerName, crop } = location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-200 text-center">
      <div>
        <h1 className="text-3xl font-bold">Order Confirmed!</h1>
        <p className="mt-4">
          Congratulations, {buyerName}! Your order for "{crop.name}" priced at ₹{crop.price} has been confirmed.
        </p>
      </div>
    </div>
  );
};

export default OrderConfirm;
