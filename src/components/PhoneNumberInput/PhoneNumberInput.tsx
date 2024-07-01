'use client'
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const PhoneNumberInput = () => {
    const [value, setValue] = useState<string>()
    console.log(value);
    

  return (
    <>
      <PhoneInput
      inputStyle={{height :'40px' , width : '100%'}}
      value={value}
      onChange={value=>setValue(value)}
      />
    </>
  );
};

export default PhoneNumberInput;