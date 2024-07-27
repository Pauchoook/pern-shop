import React from 'react';
import {Checkbox} from "../../../ui";
import {DeviceApi} from "../../../store/services/DeviceService";
import {useAppDispatch} from "../../../hooks/reducer";
import FilterSlice, {setBrand, setPage} from "../../../store/reducers/filter/FilterSlice";

export const Brands = () => {
  const {data: brands} = DeviceApi.useGetBrandsQuery({});
  const dispatch = useAppDispatch();

  const handlerChange = (brandId: number | null) => {
    dispatch(setPage(1));
    dispatch(setBrand(brandId));
  }

  return (
    <div className="p-3 bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-2xl">
      <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
        Brands
      </h6>
      <ul className="text-sm flex items-center gap-3 flex-wrap">
        <li>
          <Checkbox value={"all"} name="brand-radio" onChange={() => handlerChange(null)}/>
        </li>
        {brands?.map(brand => (
          <li key={brand.id}>
            <Checkbox value={brand.name} name="brand-radio" onChange={() => handlerChange(brand.id)}/>
          </li>
        ))}
      </ul>
    </div>
  );
};