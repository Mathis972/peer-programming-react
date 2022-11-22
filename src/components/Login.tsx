import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../index';
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const onLogin = async () => {
    try {
      const r = await signInWithEmailAndPassword(auth, username, password);
      if (r.user) {
        window.navigator.vibrate(200);
        (window as Window).location = '/hack';
      }
    } catch (e) {
      setHasError(true);
      window.navigator.vibrate(2000);
      console.error(e);
    }
  };
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={(u) => setUsername(u.target.value)}
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(p) => setPassword(p.target.value)}
          ></input>
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onLogin}
          >
            Log In
          </button>
        </div>
      </form>
      {hasError && (
        <p className="text-red-500 p-5 text-center">
          Une erreur a eu lieu avec cette connexion
        </p>
      )}
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Ynov Corp. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
