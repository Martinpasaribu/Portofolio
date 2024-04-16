import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

function EmailChecker() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const checkEmail = () => {
    // Pola regex untuk memeriksa alamat email
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Memeriksa apakah alamat email sesuai dengan pola regex
    setIsValid(pattern.test(email));

        toast.error('Terjadi kesalahan saat mengirim pesan');
  };

  return (
    <div>
    <div><Toaster/></div>
      <input
        type="text"
        value={email}
        onChange={handleInputChange}
        placeholder="Masukkan alamat email"
      />
      <button onClick={checkEmail}>Periksa Email</button>
      {isValid ? (
        <p>Alamat email valid.</p>
      ) : (
        <p>Alamat email tidak valid.</p>
      )}
    </div>
  );
}

export default EmailChecker;
