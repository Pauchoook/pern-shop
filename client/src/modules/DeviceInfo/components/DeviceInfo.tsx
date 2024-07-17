import React from 'react';
import DeviceLeft from "./DeviceLeft";
import DeviceRight from "./DeviceRight";
import {DeviceApi} from "../../../store/services/DeviceService";
import {useParams} from "react-router-dom";

export const DeviceInfo = () => {
  const {id} = useParams();
  const {data: device, isLoading} = DeviceApi.useGetDeviceOneQuery({id: Number(id)});

  if (isLoading) {
    return <h5 className="font-bold text-xl">Is loading...</h5>
  }

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <DeviceLeft img={device?.img || ""}/>
          <DeviceRight info={device?.info || []} name={device!.name} price={device!.price} rating={device!.rating}/>
        </div>
      </div>
    </div>
  );
};
