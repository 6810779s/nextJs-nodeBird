import React, { useState, useCallback } from 'react';

export default (initialValue = null) => {
  const data = initialValue;
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
  };
  return handleSubmit;
};
