import React from 'react';
import {Checkbox} from "../../../ui";
import {useAppDispatch} from "../../../hooks/reducer";
import {DeviceApi} from "../../../store/services/DeviceService";
import {setType, setPage} from "../../../store/reducers/filter/FilterSlice";

export const Category = () => {
  const {data: types} = DeviceApi.useGetTypesQuery({});
  const dispatch = useAppDispatch();

  const handlerChange = (typeId: number | null) => {
    dispatch(setPage(1));
    dispatch(setType(typeId));
  }

  return (
    <div className="z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
      <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
        Category
      </h6>
      <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
        <li className="flex items-center">
          <Checkbox name="radio-category" value={"all"} onChange={() => handlerChange(null)}/>
        </li>
        {types?.map(type => (
          <li key={type.id} className="flex items-center">
            <Checkbox name="radio-category" value={type.name} onChange={() => handlerChange(type.id)}/>
          </li>
        ))}
      </ul>
    </div>
  );
};