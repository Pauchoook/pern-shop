import React from 'react';
import {Checkbox} from "../../../ui";
import {DeviceApi} from "../../../store/services/DeviceService";

export const Brands = () => {
  const {data: brands} = DeviceApi.useGetBrandsQuery({});

  return (
    <div className="p-3 bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-2xl">
      <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
        Brands
      </h6>
      <ul className="text-sm flex items-center gap-3 flex-wrap">
        {brands?.map(brand => (
          <li key={brand.id}>
            <Checkbox value={brand.name} name="brand-radio" onChange={() => {}}/>
          </li>
        ))}
      </ul>
    </div>
  );
};