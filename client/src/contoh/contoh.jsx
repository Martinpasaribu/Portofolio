import React from 'react';
import { useSelector } from 'react-redux';

function HalamanLain() {
  const inputValue = useSelector(state => state.inputValue);

  return (
    <div>
      <p>Data yang diterima dari halaman sebelumnya: {inputValue}</p>
    </div>
  );
}

export default HalamanLain;
