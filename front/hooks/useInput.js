import React, { useState, useCallback } from 'react';

export default (initialValue = null) => {
  const data = initialValue;
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      useId: data.get('useId'),
      password: data.get('password'),
    });
  };
  return handleSubmit;
};
