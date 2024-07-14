import React from 'react';
import {ButtonClose} from "../ui";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onHide: () => void;
}

export const Modal: React.FC<ModalProps> = ({title, children, onHide}) => {
  return (
    <div onClick={onHide} className="fixed inset-0 bg-gray-400 z-50 flex items-center justify-center">
      <div onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()} className="h-4/5 overflow-y-auto bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-2xl">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <ButtonClose onClick={onHide}/>
        </div>
        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  );
};
