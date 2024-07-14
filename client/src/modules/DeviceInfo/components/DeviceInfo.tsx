import React from 'react';
import DeviceLeft from "./DeviceLeft";
import DeviceRight from "./DeviceRight";

export const DeviceInfo = () => {
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <DeviceLeft />
          <DeviceRight />
        </div>
      </div>
    </div>
  );
};
