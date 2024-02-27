import React, { useContext, useState } from 'react';
import { login } from './config/firebase';
import { auth } from './config/firebase';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await auth.signInWithEmailAndPassword(username, password).then((userCredential) => {
        localStorage.setItem('198572fb-42ed-4c4c-a77e-a15f4c1064b0', JSON.stringify(userCredential.user));
        navigate('/admin');
        
      });
    } catch (error1) {
      setError(error1 || 'Signup failed');
      console.log(error1);
      alert(error1);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      {error && <p className="error">{error}</p>}
      <input
        type="username"
        name="username"
        placeholder={name}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        Login
      </button>
    </form>
  );

1};
