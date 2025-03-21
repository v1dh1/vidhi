'use client';
import { useState } from 'react';
import TraceProject from './TraceProject';

export default function ProtectedPage() {
  const [password, setPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);

  const verifyPassword = () => {
    if (password === 'tdlab123') { // Ensure your password check is secure for production use
      setAccessGranted(true);
    } else {
      // Updated alert message for incorrect password entry
      alert('Incorrect Password. Please try again.');
    }
  };

  if (!accessGranted) {
    return (
      <div className='h-screen -my-16 p-4 flex flex-col justify-center items-center'>

  <div className='text-4xl text-stone-700 text-center font-semibold'>{"This page is protected"}</div>
  <div className='text-l text-stone-600 text-center pt-3 pb-8'>{"Enter the password: tdlab123 to view this project"}</div>

  <div className='w-full max-w-xs flex justify-center items-center gap-4'>
    <input
      className='p-4 rounded-xl pr-6 w-full bg-pink-50 text-stone-800'
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter Password"
    />
    <button className="bg-pink-200 p-4 rounded-xl text-center text-stone-900 hover:bg-pink-300" onClick={verifyPassword}>Submit</button>
  </div>
</div>

    );
  }

  return (
    <div>
      {/* Your protected content goes here */}
      <TraceProject/>
    </div>
  );
}
