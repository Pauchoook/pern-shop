import React from 'react';
import {IInfo} from "../../../utils/types/device";

interface DeviceSpecProps {
  infoArr: IInfo[]
}

const DeviceSpec: React.FC<DeviceSpecProps> = ({infoArr}) => {
  return (
    <div>
      <span className="font-bold">Product Description:</span>
      {infoArr.map(info => (
        <div key={info.id} className="flex items-center">
          <span className="text-sm mt-2 font-bold mr-2">{info.title}:</span>
          <p className="text-sm mt-2">
            {info.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DeviceSpec;