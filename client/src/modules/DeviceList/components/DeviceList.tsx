import React from 'react';
import {DeviceCard} from "../../../components";
import {useAppSelector} from "../../../hooks/reducer";

export const DeviceList = () => {
  const {devices} = useAppSelector(state => state.device);

  return (
    <div className="flex flex-wrap justify-between gap-4">
      {devices.map(device => (
        <DeviceCard id={device.id} name={device.name} img={device.img} rating={device.rating} key={device.id} price={device.price} />
      ))}
    </div>
  );
};
