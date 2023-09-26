import React from "react";

const Person = ({ email, street, phone, website, username, name, id }) => {
  return (
    <div className="row">
      <div className="card text-center mb-5 mx-auto mt-5 col-12 col-sm-12 col-md-4 col-lg-4">
        <div className="card-body ">
          <img
            style={{ width: "300px" }}
            className="card-img-top rounded img-thumbnail p-2 mx-auto"
            src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png"
            class="card-img-top"
            alt="..."
          />
          {/* <h5 className="card-title">{title}</h5> */}
          <h5 className="card-text text-start ps-2">
            <span className="text-primary">NAME:</span>
            {name}
          </h5>
          <h5 className="card-text text-start ps-2">
            <span className="text-primary">UserName:</span>
            {username}
          </h5>
          <h5 className="card-text text-start ps-2">
            <span className="text-primary">ID:</span>
            {id}
          </h5>
          <h5 className="card-text text-start ps-2">
            <span className="text-primary">Email:</span>
            {email}
          </h5>
          <h5 className="card-text text-start ps-2">
            <span className="text-primary">Phone:</span>
            {phone}
          </h5>
          <h5 className="card-text text-start ps-2">
            <span className="text-primary">Website:</span>
            {website}
          </h5>
          <h5 className="card-text text-start ps-2">
            <span className="text-primary">Street:</span>
            {street}
          </h5>
          {/* <p className="card-text">{name}</p>
          <p className="card-text">{username}</p>
          <p className="card-text">{email}</p>
          <p className="card-text">{phone}</p>
          <p className="card-text">{website}</p>
          <p className="card-text">{street}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Person;
