import React from 'react';
import {Link} from "react-router-dom";

interface LogoProps {
  href: string;
}

const Logo: React.FC<LogoProps> = ({href}) => {
  return (
    <Link to={href} className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PERN</span>
    </Link>
  );
};

export default Logo;