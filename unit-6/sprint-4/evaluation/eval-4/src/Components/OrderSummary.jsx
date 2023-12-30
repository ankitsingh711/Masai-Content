import React, { useEffect, useState } from "react";


const OrderSummary = ({ cardItems }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const totalPrice = 0;
    cardItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    setTotal(totalPrice);
  }, [cardItems]);
  return (
    <div>
      <h1>Order Summary</h1>
      <p>Total Items:{cardItems.length}</p>
      <p>totalPrice:{total}</p>
      <p>Bill{total}</p>
    </div>
  );
};

export default OrderSummary;