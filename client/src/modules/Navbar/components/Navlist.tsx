import React from 'react';
import {ButtonLink} from "../../../ui";

const NavList = () => {
  return (
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul
        className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <ButtonLink href="/">Home</ButtonLink>
        </li>
        <li>
          <ButtonLink href="/">About</ButtonLink>
        </li>
        <li>
          <ButtonLink href="/">Services</ButtonLink>
        </li>
        <li>
          <ButtonLink href="/">Home</ButtonLink>
        </li>
      </ul>
    </div>
  );
};

export default NavList;