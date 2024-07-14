import React from 'react';
import {Button} from "../../../ui";

const DeviceLeft = () => {
  return (
    <div className="px-4 max-w-sm w-full">
      <img className="w-full rounded-lg mb-4"
           src="https://msk-apple.ru/image/cache/catalog/apple12/apple%2012%20pro/apple12pro_grey_1-350x450.jpg"
           alt="Product Image"/>
      <Button className="w-full">Add to Cart</Button>
    </div>
  );
};

export default DeviceLeft;