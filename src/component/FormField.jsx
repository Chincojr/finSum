import React from 'react'

const FormField = ({ title, type, name, value, onChange }) => {
  return (
    <div>
      <label className="block text-gray-700 mb-1 font-bold">{title}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  )
}

export default FormField