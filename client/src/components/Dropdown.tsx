import React from 'react';

interface IDropdownItem {
  id: number;
  name: string;
}

interface DropdownProps {
  items: IDropdownItem[];
  handler: (val: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({items, handler}) => {
  return (
  <div id="dropdown" className="z-10 mt-2 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      {items.map(item => (
        <li key={item.id} onClick={() => handler(item.id)} className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          {item.name}
        </li>
      ))}
    </ul>
  </div>
  )
    ;
};

export default Dropdown;