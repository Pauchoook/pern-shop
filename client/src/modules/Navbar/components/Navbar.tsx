import React from 'react';
import {useAppSelector} from "../../../hooks/reducer";
import {Button} from "../../../ui";
import Logo from "./Logo";
import NavList from "./Navlist";

export const Navbar = () => {
  const {isAuth} = useAppSelector(state => state.user);

  return (
    <nav
      className="bg-white dark:bg-gray-900 w-full z-20 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo href="/"/>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
          {isAuth ?
            <>
              <Button>Admin panel</Button>
              <Button>Log out</Button>
            </>
            :
            <Button>Log in</Button>
          }
        </div>
        <NavList/>
      </div>
    </nav>
  );
};
