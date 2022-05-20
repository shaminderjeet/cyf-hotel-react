import React, { useState } from "react";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};
const RestaurantButton = ({ whatToDo }) => {
  return (
    <button className="btn btn-primary" onClick={whatToDo}>
      Add
    </button>
  );
};
const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      {orderType}: {orders}
      <RestaurantButton whatToDo={orderOne} />
    </li>
  );
};
export default Restaurant;
