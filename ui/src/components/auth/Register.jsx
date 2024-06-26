import TextInput from "../TextInput";
import { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({ type: '', message: '' });

  const showError = (type) => {
    if (error && error.type === type) {
      return error.message;
    }
    return '';
  };

  const validate = () => {
    setError({ type: '', message: '' });
    let isError = false;

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!name) {
      setError({ type: 'name', message: 'A Name is required' });
      isError = true;
    } else if (!email) {
      setError({ type: 'email', message: 'An Email is required' });
      isError = true;
    } else if (!reg.test(email)) {
      setError({ type: 'email', message: 'The Email is not valid' });
      isError = true;
    } else if (!password) {
      setError({ type: 'password', message: 'A Password is required' });
      isError = true;
    } else if (password.length < 8) {
      setError({ type: 'password', message: 'The Password needs to be longer' });
      isError = true;
    } else if (password !== confirmPassword) {
      setError({ type: 'password', message: 'The Passwords do not match' });
      isError = true;
    }
    return isError;
  };

  const register = async () => {
    let isError = validate();
    if (isError) return;

    try {
      // Your registration logic here
      setLoading(true);
      // Mocking a registration process
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);

      // Example redirect using useNavigate
      navigate('/dashboard'); // Replace with your actual redirect path
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert(error);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center text-[28px] mb-4 font-bold p-5 text-2xl block">Register</h1>

        <div className="px-6 pb-2 mb-3">
          <TextInput
            string={name}
            placeholder="Name"
            onUpdate={setName}
            inputType="text"
            error={showError('name')}
          />
        </div>

        <div className="px-6 pb-2 mb-3">
          <TextInput
            string={email}
            placeholder="Email address"
            onUpdate={setEmail}
            inputType="email"
            error={showError('email')}
          />
        </div>

        <div className="px-6 pb-2 mb-3">
          <TextInput
            string={password}
            placeholder="Password"
            onUpdate={setPassword}
            inputType="password"
            error={showError('password')}
          />
        </div>

        <div className="px-6 pb-2 mb-3">
          <TextInput
            string={confirmPassword}
            placeholder="Confirm Password"
            onUpdate={setConfirmPassword}
            inputType="password"
            error={showError('confirmPassword')}
          />
        </div>

        <div className="px-6 pb-2 mt-6 mb-6">
          <button
            disabled={loading || !name || !email || !password || !confirmPassword}
            onClick={() => register()}
            className={`
              flex items-center justify-center w-full text-[17px] font-semibold text-white py-3 rounded-md
              ${!name || !email || !password || !confirmPassword ? 'bg-gray-200' : 'bg-blue-500'}
            `}
          >
            {loading ? (
              <BiLoaderCircle className="animate-spin" color="#ffffff" size={25} />
            ) : (
              'Register'
            )}
          </button>
        </div>
      </div>
    </>
  );
}
