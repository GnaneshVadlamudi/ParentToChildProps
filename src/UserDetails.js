import React from "react";

const UserDetails = (props) => (
  <div>
    <p>Username: {props.username}</p>
    <p>First Name: {props.firstName}</p>
    <p>Last Name: {props.lastName}</p>
  </div>
);

export default UserDetails;
