import React from 'react';
import {Button} from "../../../ui";
import Dropdown from "../../../components/Dropdown";
import {IBrand, IType} from "../../../utils/types";

interface DropdownsProps {
  changeBrand: (val: number) => void;
  changeType: (val: number) => void;
  handlerBrand: () => void;
  handlerType: () => void;
  currentBrand?: string;
  currentType?: string;
  brands: IBrand[];
  types: IType[];
  isType: boolean;
  isBrand: boolean;
}

const Dropdowns: React.FC<DropdownsProps> = ({
                                               changeBrand,
                                               changeType,
                                               handlerType,
                                               handlerBrand,
                                               currentBrand,
                                               currentType, brands, types, isType, isBrand
                                             }) => {
    return (
      <>
        <div className="relative">
          <Button onClick={handlerBrand}>Choose
            brand {currentBrand}</Button>
          {isBrand && <Dropdown handler={changeBrand} items={brands}/>}
        </div>
        <div className="relative my-2">
          <Button onClick={handlerType}>Choose
            type {currentType}</Button>
          {isType && <Dropdown handler={changeType} items={types}/>}
        </div>
      </>
    );
  }
;

export default Dropdowns;