"use client";

import LightButton from "@/components/light-button";
import { Heading3 } from "@/components/text";
import TextInput from "@/components/text-input";
import Link from "next/link";
import React, { FormEvent } from "react";
import { SignInProps } from "./sign-in";

const SignIn = ({ isAdmin = false, adminSubmit }: SignInProps) => {
  const onLoginSubmit = (e: FormEvent) => {
    if (isAdmin && adminSubmit) adminSubmit(e);
    else console.log(e);
  };

  const messagesClassName =
    "flex flex-col md:flex-row justify-between mt-4" +
    (isAdmin ? " hidden" : "");

  return (
    <div className='mt-10 md:mt-20 p-8 border rounded-md bg-white dark:bg-gray-700'>
      <Heading3 className='text-gray-900 mb-4 text-center'>
        {`Welcome Again${isAdmin ? ", Admin!" : "!"}`}
      </Heading3>
      <form className='flex flex-col gap-y-6' onSubmit={onLoginSubmit}>
        <TextInput
          type='email'
          name='floating_email'
          id='floating_email'
          required
          hasLabel
          label='Email address'
        />
        <TextInput
          type='password'
          name='floating_password'
          id='floating_password'
          required
          hasLabel
          label='Password'
        />
        <LightButton type='submit'>Log In</LightButton>
        <div className={messagesClassName}>
          <p
            id='helper-text-explanation'
            className='mt-2 text-sm text-gray-500 dark:text-gray-400'
          >
            Are you an administrator?. Please,{" "}
            <Link
              href='/sign-in/admin'
              className='font-medium text-blue-600 hover:underline dark:text-blue-500'
            >
              Click Here{" "}
            </Link>
            to sign in.
          </p>
          <p
            id='helper-text-explanation'
            className='mt-2 text-sm text-gray-500 dark:text-gray-400'
          >
            Are you a new client?. Create a new account{" "}
            <a
              href='/sign-up'
              className='font-medium text-blue-600 hover:underline dark:text-blue-500'
            >
              just here
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
