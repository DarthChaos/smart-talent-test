"use client";

import { msalConfig } from "@/auth/auth-config";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import React from "react";

const msalInstance = new PublicClientApplication(msalConfig);

const AadProvider = ({ children }: { children: React.ReactNode }) => {
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
};

export default AadProvider;
