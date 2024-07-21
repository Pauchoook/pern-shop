import React from 'react';
import DeviceSpec from "./DeviceSpec";
import {IInfo} from "../../../utils/types/device";

interface DeviceRightProps {
  name: string;
  price: number;
  rating: number;
  info: IInfo[];
}

const DeviceRight: React.FC<DeviceRightProps> = ({name, price, rating, info}) => {
  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
      <div className="flex items-center gap-2 mb-4">
        <span className="font-bold">Ratging:</span>
        <span>{rating}</span>
      </div>
      <div className="flex mb-4">
        <div className="mr-4">
          <span className="font-bold">Price:</span>
          <span>{price}</span>
        </div>
      </div>
      <DeviceSpec infoArr={info}/>
    </div>
  );
};

export default DeviceRight;