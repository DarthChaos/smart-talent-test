import React from "react";
import SignIn from "../page";

const AdminSignIn = () => {
  const onAdminSubmit = (e: any) => {
    console.log(e);
  };

  return <SignIn isAdmin />;
};

export default AdminSignIn;
