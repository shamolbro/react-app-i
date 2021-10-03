import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart.js";
import Container from "../container/Container.js";

const Main = () => {
  const [employs, setEmploys] = useState([]);
  const [selectedEmploys, setSelectedEmploys] = useState([]);

  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setEmploys(data));
  }, []);

  useEffect(() => {
    const cart = getCart();
    setSelectedEmploys(cart);
  }, [employs]);

  function getCart() {
    const existingCart = localStorage.getItem("cart");

    let cart;

    if (!existingCart) {
      cart = [];
    } else {
      cart = JSON.parse(existingCart);
    }
    return cart;
  }

  function eventHandler(person) {
    const isExist = selectedEmploys.find((employ) => employ.id === person.id);

    if (!isExist) {
      const newSelected = [...selectedEmploys, person];
      setSelectedEmploys(newSelected);
      localStorage.setItem("cart", JSON.stringify(newSelected));
    } else {
      alert("This person has already been selected!");
    }
  }

  function Confirm() {
    if (!selectedEmploys.length) {
      alert("Select few person before confirming");
    } else {
      setSelectedEmploys([]);
      localStorage.setItem("cart", []);
      alert("Thanks for Confirmation!");
    }
  }

  function Remove(id) {
    const modifiedSelection = selectedEmploys.filter(
      (person) => person.id !== id
    );
    setSelectedEmploys(modifiedSelection);
    localStorage.setItem("cart", JSON.stringify(modifiedSelection));
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div style={{ maxWidth: "950px" }}>
          <Container Selection={eventHandler} employs={employs}></Container>
        </div>
        <div
          style={{
            position: " absolute",
            top: "160px",
            right: "0",
            width: "400px",
          }}
        >
          <Cart
            cart={selectedEmploys}
            ConfirmHandle={Confirm}
            removeHandler={Remove}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Main;
