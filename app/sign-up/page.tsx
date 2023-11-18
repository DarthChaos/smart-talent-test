"use client";

import DateInput from "@/components/date-input";
import LightButton from "@/components/light-button";
import Selector from "@/components/selector";
import TextInput from "@/components/text-input";
import React from "react";

const SignUp = () => {
  return (
    <div className='mt-10 md:mt-20 p-8 border rounded-md bg-white dark:bg-gray-700'>
      <form>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <TextInput
            type='text'
            name='first_name'
            id='first_name'
            required
            hasLabel
            label='First name'
          />
          <TextInput
            type='text'
            name='last_name'
            id='last_name'
            required
            hasLabel
            label='Last name'
          />
        </div>
        <TextInput
          type='email'
          name='email'
          id='email'
          required
          hasLabel
          label='Email'
        />
        <div className='grid md:grid-cols-2 md:gap-6'>
          <TextInput
            type='password'
            name='password'
            id='password'
            required
            hasLabel
            label='Password'
          />
          <TextInput
            type='password'
            name='confirm_password'
            id='confirm_password'
            required
            hasLabel
            label='Confirm Password'
          />
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='grid md:grid-cols-2 md:gap-6'>
            <div className='max-h-[42px] mb-6'>
              <DateInput
                onChange={() => {}}
                placeholder='Birth Date'
                id='birth_date'
                name='birth_date'
                className='border-2'
              />
            </div>
            <Selector
              onChange={() => {}}
              options={[
                { value: "M", label: "Male" },
                { value: "F", label: "Female" },
                { value: "NB", label: "Not Binary" },
              ]}
              placeholder='Genre'
              className='max-h-[42px] border-2 mb-6'
            />
          </div>
          <TextInput
            type='text'
            name='phone_number'
            id='phone_number'
            required
            hasLabel
            label='Phone Number'
          />
        </div>
        <div className='grid md:grid-cols-3 md:gap-6'>
          <Selector
            onChange={() => {}}
            options={[
              { value: "CC", label: "Citizenship Card" },
              { value: "IC", label: "Identity Card" },
              { value: "FC", label: "Foreigner Card" },
            ]}
            placeholder='ID Type'
            className='min-w-full max-h-[42px] border-2 col-span-2 md:col-span-1 mb-6'
          />
          <div className='col-span-2'>
            <TextInput
              type='text'
              name='id_number'
              id='id_number'
              required
              hasLabel
              label='ID Number'
            />
          </div>
        </div>
        <LightButton type='submit'>Sign Up</LightButton>
      </form>
    </div>
  );
};

export default SignUp;
