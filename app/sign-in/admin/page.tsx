"use client";

import React from "react";
import SignInForm from "../sign-in-form";

const AdminSignIn = () => {
  const onAdminSubmit = (e: any) => {
    console.log(e);
  };

  return <SignInForm isAdmin adminSubmit={onAdminSubmit} />;
};

export default AdminSignIn;
