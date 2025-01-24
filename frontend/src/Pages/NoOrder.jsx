import React from "react";
import { useLocation } from "react-router-dom";

const NoOrder = () => {
  const location = useLocation();
  const { buyerName } = location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-200 text-center">
      <div>
        <h1 className="text-3xl font-bold">No Order Available</h1>
        <p className="mt-4">
          Sorry, {buyerName}. No crops match your price range. Please try again with a different range.
        </p>
      </div>
    </div>
  );
};

export default NoOrder;
