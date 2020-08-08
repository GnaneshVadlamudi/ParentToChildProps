import React from "react";
import UserDetails from "./UserProfile.js"

const UserProfile = (props) => (
  <div>
    <h2>Profile Page of {props.username}</h2>
    <UserDetails {...props} />
  </div>
)

export default UserProfile;