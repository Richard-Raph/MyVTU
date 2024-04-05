import React from 'react';
import PropTypes from 'prop-types';

function TextInput({ string, inputType, placeholder, error, onUpdate }) {
  return (
    <>
      <input 
        placeholder={placeholder}
        className="block w-full bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none" 
        value={string || ''}
        onChange={(event) => onUpdate(event.target.value)}
        type={inputType}
        autoComplete="off"
      />

      <div className="text-red-500 text-[14px] font-semibold">
        {error ? (error) : null}
      </div>
    </>
  );
}

TextInput.propTypes = {
  string: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onUpdate: PropTypes.func,
};

export default TextInput;