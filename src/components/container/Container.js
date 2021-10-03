import React from "react";
import "./../fontAwesome/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = ({ employs, Selection }) => {
  return (
    <div>
      <div className="d-flex flex-wrap">
        {employs.map((employ) => (
          <PersonCard
            key={employ.id}
            SelectionHandler={Selection}
            person={employ}
          />
        ))}
      </div>
    </div>
  );
};

function PersonCard({ person, SelectionHandler }) {
  return (
    <div className="mx-2 my-3" style={{ width: "18rem" }}>
      <div className="card pt-2">
        <div className="text-center">
          <img
            style={{ width: "120px", borderRadius: "50%" }}
            src={person.img}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="mt-3">
          <ul className="list-unstyled d-flex justify-content-center">
            <li>
              <a className="text-decoration-none" href="/">
                <FontAwesomeIcon
                  style={{ color: "#4267B2", fontSize: "24px" }}
                  icon={["fab", "facebook-f"]}
                />
              </a>
            </li>
            <li className="mx-2">
              <a className="text-decoration-none" href="/">
                <FontAwesomeIcon
                  style={{ color: "#0077b5", fontSize: "24px" }}
                  icon={["fab", "linkedin"]}
                />
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="/">
                <FontAwesomeIcon
                  style={{ color: "#1DA1F2", fontSize: "24px" }}
                  icon={["fab", "twitter"]}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body pt-0">
          <h5 className="card-title text-uppercase text-primary">
            {person.name}
          </h5>
          <p className="card-text p-0 m-0">Post: {person.post}</p>
          <p className="card-text p-0 m-0">Age: {person.age}</p>
          <p className="card-text p-0 m-0">Address: {person.address}</p>
          <p className="card-text p-0 m-0">Salary: ${person.salary}</p>
          <button
            onClick={() => SelectionHandler(person)}
            className="btn mt-3 btn-primary w-100"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default Container;
