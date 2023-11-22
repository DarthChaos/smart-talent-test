import { loginRequest } from "@/auth/auth-config";
import { signIn, signOut } from "@/auth/auth-slice";
import DarkButton from "@/components/dark-button";
import DarkLink from "@/components/dark-link";
import { useAppDispatch } from "@/store/hooks";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import React from "react";

const SignInOut = () => {
  const { instance } = useMsal();
  const dispatch = useAppDispatch();

  const handleSignIn = async () => {
    try {
      const loginInstance = await instance.loginPopup(loginRequest);

      dispatch(signIn(loginInstance));
    } catch (e: any) {
      console.log("Error login in ", e);
    }
  };
  const handleSignOut = async () => {
    try {
      await instance.logoutPopup();

      dispatch(signOut());
    } catch (e: any) {
      console.log("Error login in ", e);
    }
  };

  const withAuth = (
    <AuthenticatedTemplate>
      <DarkButton
        className='ml-4 mr-0 md:mx-6 text-xs md:text-sm px-2 py-4 md:px-4 md:py-4'
        onClick={handleSignOut}
      >
        Sign Out
      </DarkButton>
    </AuthenticatedTemplate>
  );
  const withoutAuth = (
    <UnauthenticatedTemplate>
      <DarkButton
        className='ml-4 mr-0 md:mx-6 text-xs md:text-sm px-2 py-4 md:px-4 md:py-4'
        onClick={handleSignIn}
      >
        Sign In
      </DarkButton>
    </UnauthenticatedTemplate>
  );

  return (
    <>
      {withAuth}
      {withoutAuth}
    </>
  );
};

export default SignInOut;
