
import React from "react";
import UserProfile from "./UserProfile.js"

const User = (props) => (
  <div>
    <UserProfile {...props.user} />
  </div>
)

export default User;