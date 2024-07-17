import React from 'react';
import {Button} from "../../../ui";

interface DeviceLeftProps {
  img: string;
}

const DeviceLeft: React.FC<DeviceLeftProps> = ({img}) => {
  return (
    <div className="px-4 max-w-sm w-full">
      <img className="w-full rounded-lg mb-4"
           src={`${process.env.REACT_APP_API_URL}/${img}`}
           alt="Product Image"/>
      <Button className="w-full">Add to Cart</Button>
    </div>
  );
};

export default DeviceLeft;