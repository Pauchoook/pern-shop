import React from 'react';
import {Button, Input} from "../../../ui";
import {Link} from "react-router-dom";
import {paths} from "../../../utils/paths";

const FormReg = () => {
  return (
    <form className="space-y-4 md:space-y-6" action="#">
      <Input onChange={(e) => {
      }} label="Your email" type="email" name="email" required={true} placeholder="name@company.com"/>
      <Input onChange={(e) => {
      }} label="Your password" type="password" name="password" required={true} placeholder="••••••••"/>
      <Input onChange={(e) => {
      }} label="Your role" type="text" name="role" required={true} placeholder="USER"/>
      <Button className="w-full">Registration</Button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?
        <Link to={paths.LOGIN_ROUTE}
              className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2">Log in</Link>
      </p>
    </form>
  );
};

export default FormReg;