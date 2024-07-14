import React from 'react';

interface InputFileProps {
  title: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputFile: React.FC<InputFileProps> = ({title, onChange}) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file-input">{title}</label>
      <input
        onChange={onChange}
        name="file-input"
        accept="image/jpeg"
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file-input" type="file"/>
    </div>
  );
};
