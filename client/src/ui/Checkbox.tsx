import React from 'react';

interface CheckboxProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({name, onChange, value}) => {
  return (
    <div className="flex items-center">
      <input onChange={onChange} name={name} id={name + value} type="radio"
             className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
      <label htmlFor={name + value} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
        {value}
      </label>
    </div>
  );
};
