import React from 'react';
import DeviceSpec from "./DeviceSpec";

const DeviceRight = () => {
  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Name</h2>
      <p className="text-sm mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
        ante justo. Integer euismod libero id mauris malesuada tincidunt.
      </p>
      <div className="flex items-center gap-2 mb-4">
        <span className="font-bold">Ratging:</span>
        <span>5</span>
      </div>
      <div className="flex mb-4">
        <div className="mr-4">
          <span className="font-bold">Price:</span>
          <span>$29.99</span>
        </div>
      </div>
      <DeviceSpec infoArr={[]} />
    </div>
  );
};

export default DeviceRight;