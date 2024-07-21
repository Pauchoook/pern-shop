import React from 'react';
import {Brands, Category} from "../modules";
import {DeviceList} from "../modules";
import {Pagination} from "../modules";

export const Shop = () => {
  return (
    <div className="pt-12 px-6">
      <div className="flex items-start gap-12">
        <Category />
        <div className="flex flex-col gap-8 w-full">
          <Brands />
          <DeviceList />
        </div>
      </div>
      <Pagination />
    </div>
  );
};
