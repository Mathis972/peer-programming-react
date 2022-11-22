import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../index';
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onLogin = async () => {
    setIsLoading(true);
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
      setIsLoading(false);
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
            className={`shadow appearance-none border ${
              hasError && 'border-red-500'
            } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
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
            className={`shadow appearance-none border ${
              hasError && 'border-red-500'
            } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(p) => setPassword(p.target.value)}
          ></input>
          {hasError && (
            <p className="text-red-500 text-xs italic pt-2">
              Username or password is incorrect.
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onLogin}
          >
            {isLoading ? (
              <span className="flex justify-center items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </span>
            ) : (
              <span>Log in</span>
            )}
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Ynov Corp. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
