import React from "react";
import { useUser } from "../providers/UserProvider";

export const ProfileImage = () => {
  const { user } = useUser();
  return (
    <img alt="profile" src={user.profileImage} className="profile-image" />
  );
};
