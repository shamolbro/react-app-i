import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../fontAwesome";
const Cart = ({ cart, ConfirmHandle, removeHandler }) => {
  const total = cart.reduce(
    (previous, person) => previous + Number(person.salary),
    0
  );
  return (
    <div className="bg-dark p-2">
      <div className="mx-2 my-3" style={{ width: "18rem" }}>
        <h5 className="card-title text-uppercase text-primary">
          Total Selected {cart.length} Employs
        </h5>
        <h6 className="text-center text-white">Total Cost: ${total}</h6>
      </div>
      <hr className="text-primary" />
      <ul>
        {cart.map((person) => (
          <Details
            key={person.id}
            name={person.name}
            img={person.img}
            id={person.id}
            removeHandler={removeHandler}
          />
        ))}
      </ul>
      <button onClick={ConfirmHandle} className="btn my-2 btn-primary w-100">
        Confirm
      </button>
    </div>
  );
};

function Details({ name, img, id, removeHandler }) {
  return (
    <li className="my-2">
      <img
        className="me-2"
        style={{ width: "40px", borderRadius: "50%" }}
        src={img}
        alt=""
      />
      <span className="text-muted">{name}</span>
      <button onClick={() => removeHandler(id)} className="btn">
        <FontAwesomeIcon
          style={{ color: "red", fontSize: "18px" }}
          icon={["far", "times-circle"]}
        />
      </button>
    </li>
  );
}

export default Cart;

// var arr = [1, 2, 3]
// var result = arr.reduce((total,num)=>total+num ,0)
