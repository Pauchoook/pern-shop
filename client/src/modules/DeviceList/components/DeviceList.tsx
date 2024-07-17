import React from 'react';
import {DeviceCard} from "../../../components";
import {DeviceApi} from "../../../store/services/DeviceService";

export const DeviceList = () => {
  const {data: devices, isLoading} = DeviceApi.useGetDevicesQuery({limit: 10});

  if (isLoading) {
    return <h5 className="font-bold text-xl">Is loading...</h5>
  }

  return (
    <div className="flex flex-wrap gap-4">
      {devices?.rows.map(device => (
        <DeviceCard id={device.id} name={device.name} img={device.img} rating={device.rating} key={device.id} price={device.price} />
      ))}
    </div>
  );
};
