import React, {useEffect} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {paths} from "../../../utils/paths";
import FormLogin from "./FormLogin";
import FormReg from "./FormReg";
import {useAppSelector} from "../../../hooks/reducer";

export const FormAuth = () => {
  const {isAuth} = useAppSelector(state => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === paths.LOGIN_ROUTE;

  useEffect(() => {
    if (isAuth) {
      navigate(paths.SHOP_ROUTE);
    }
  }, [isAuth]);

  return (
    <>
      {isLogin ? <FormLogin/> : <FormReg/>}
    </>
  )
};
