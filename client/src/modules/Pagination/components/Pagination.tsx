import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/reducer";
import {setPage} from "../../../store/reducers/filter/FilterSlice";

interface PaginationProps {
  pages: number[];
}

export const Pagination: React.FC<PaginationProps> = ({pages}) => {
  const dispatch = useAppDispatch();
  const {page} = useAppSelector(state => state.filter);

  const handlerClick = (p: number) => {
    dispatch(setPage(p));
  }

  return (
    <ul className="flex -space-x-px text-base h-10 mt-5 gap-3 mb-3 justify-center">
      {pages.map(p => (
        <li key={p}
            onClick={() => handlerClick(p)}
            className={`${p === page && "border border-white border-2 border-solid"} flex items-center justify-center cursor-pointer w-10 h-10 ms-0 leading-tight text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}>
          {p}
        </li>
      ))}
    </ul>
  );
};