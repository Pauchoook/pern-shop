import React from 'react';
import {Button, Input} from "../../../ui";
import {Link, useLocation} from "react-router-dom";
import {paths} from "../../../utils/paths";
import FormLogin from "./FormLogin";
import FormReg from "./FormReg";

export const FormAuth = () => {
  const location = useLocation();
  const isLogin = location.pathname === paths.LOGIN_ROUTE;

  return (
    <>
      {isLogin ? <FormLogin/> : <FormReg/>}
    </>
  )
};
