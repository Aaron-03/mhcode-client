import React, { useState } from 'react';

const useForm = () => {

  const [ data, setData ] = useState({});

  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value
    });
  }

  return {
    data,
    handleChange
  }
}

export default useForm
