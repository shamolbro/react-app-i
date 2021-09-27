import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";

function Member(props) {
  const { members, eventHandler } = props;
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {members.map((member) => {
        return (
          <div className="my-4 mx-2" key={member.id}>
            <div className="card pt-2" style={{ width: "18rem" }}>
              <div className="text-center">
                <img
                  src={member.img}
                  className="card-img-top rounded-circle w-50"
                  alt="..."
                />
              </div>

              <div className="card-body mt-0 pt-0">
                <h5 className="card-title text-primary text-uppercase">
                  {member.name}
                </h5>
                <p className="card-text mx-0 my-1">Post: {member.post}</p>
                <p className="card-text mx-0 my-1">Age: {member.age}</p>
                <p className="card-text mx-0 my-1">Address: {member.address}</p>
                <p className="card-text mx-0 my-1">Salary: {member.salary}</p>
                <div>
                  <button
                    onClick={() => eventHandler(member)}
                    className="btn w-100 btn-primary"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Member;
