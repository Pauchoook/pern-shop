import React from 'react';
import {FormAuth} from "../modules/FormAuth";

export const Registration = () => {

  return (
    <div className="flex items-center justify-center h-screen pt-32">
      <div
        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Register an account for yourself
          </h1>
          <FormAuth />
        </div>
      </div>
    </div>
  )
};
