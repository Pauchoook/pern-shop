import React, {useState} from 'react';
import {Button, Input} from "../../../ui";
import {Link} from "react-router-dom";
import {paths} from "../../../utils/paths";
import {useAppDispatch, useAppSelector} from "../../../hooks/reducer";
import {registration} from "../../../store/reducers/user/ActionsCreators";

const FormReg = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const {error} = useAppSelector(state => state.user);

  const handlerRegistration = () => {
    dispatch(registration({email, password, role}));
  }

  return (
    <form className="space-y-4 md:space-y-6" action="#">
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} label="Your email"
             type="email" name="email" required={true} placeholder="name@company.com"/>
      <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} label="Your password"
             type="password" name="password" required={true} placeholder="••••••••"/>
      <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRole(e.target.value)} label="Your role"
             type="text" name="role" required={true} placeholder="USER"/>
      <Button onClick={handlerRegistration} className="w-full">Registration</Button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?
        <Link to={paths.LOGIN_ROUTE}
              className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2">Log in</Link>
      </p>
    </form>
  );
};

export default FormReg;