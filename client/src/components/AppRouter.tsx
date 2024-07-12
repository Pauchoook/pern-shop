import React from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../utils/routes";
import {useAppSelector} from "../hooks/reducer";
import {NoMatch} from "../pages";

export const AppRouter = () => {
  const {isAuth} = useAppSelector(state => state.user);

  console.log(isAuth)

  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({path, Component}) => (
          <Route key={path} path={path} element={<Component/>}/>
        ))
      }
      {publicRoutes.map(({path, Component}) => (
        <Route key={path} path={path} element={<Component/>}/>
      ))}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
