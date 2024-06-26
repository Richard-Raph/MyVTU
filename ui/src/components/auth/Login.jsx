import '../../../assets/css/style.css'
import React, { useState } from "react";
import TextInput from "../TextInput";
import { BiLoaderCircle } from "react-icons/bi";

export default function Login({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ type: '', message: '' });
  const [isRegister, setIsRegister] = useState(false);

  const handleToggle = () => {
    setIsRegister(!isRegister);
  };

  const showError = (type) => {
    if (error && Object.entries(error).length > 0 && error.type === type) {
      return error.message;
    }
    return '';
  };

  const validate = () => {
    setError({ type: '', message: '' });
    let isError = false;

    if (!email) {
      setError({ type: 'email', message: 'An Email is required' });
      isError = true;
    } else if (!password) {
      setError({ type: 'password', message: 'A Password is required' });
      isError = true;
    }
    return isError;
  };

  const login = async () => {
    let isError = validate();
    if (isError) return;

    try {
      setLoading(true);
      // Your login logic here
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert(error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-[28px] mb-4 font-bold p-5 text-2xl block">Log in</h1>

      <div className="px-6 pb-2 mb-5">
        <TextInput
          string={email}
          placeholder="Email address"
          onUpdate={setEmail}
          inputType="email"
          error={showError('email')}
        />
      </div>

      <div className="px-6 pb-2 mb-5">
        <TextInput
          string={password}
          placeholder="Password"
          onUpdate={setPassword}
          inputType="password"
          error={showError('password')}
        />
      </div>

      <div className="px-6 pb-2 mt-6 mb-6">
        <button
          disabled={loading || !email || !password}
          onClick={() => login()}
          className={`
          flex items-center justify-center w-full text-[17px] font-semibold text-white py-3 rounded-md
          ${!email || !password ? 'bg-gray-200' : 'bg-blue-500'}
        `}
        >
          {loading ? (
            <BiLoaderCircle className="animate-spin" color="#ffffff" size={25} />
          ) : (
            'Log in'
          )}
        </button>
      </div>
    </div>
  );
}
