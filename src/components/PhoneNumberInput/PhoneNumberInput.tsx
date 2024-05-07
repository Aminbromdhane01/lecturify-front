'use client'
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const PhoneNumberInput = () => {
    const [value, setValue] = useState()


  return (
    <>
      <PhoneInput
      inputStyle={{height :'40px' , width : '100%'}}
      onChange={()=>{}}
      />
    </>
  );
};

export default PhoneNumberInput;