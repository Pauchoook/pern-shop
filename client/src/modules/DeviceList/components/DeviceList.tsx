import React, {useEffect} from 'react';
import {DeviceCard} from "../../../components";
import {DeviceApi} from "../../../store/services/DeviceService";
import {Pagination} from "../../Pagination";
import {useAppSelector} from "../../../hooks/reducer";

export const DeviceList = () => {
  const {limit, page, typeId, brandId} = useAppSelector(state => state.filter);
  const {data: devices, isLoading, refetch} = DeviceApi.useGetDevicesQuery({limit, page, typeId, brandId});
  const pageCount = devices ? Math.ceil(devices.count / limit) : 0;
  const pages:number[] = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  useEffect(() => {
    refetch();
  }, [page, typeId, brandId]);

  if (isLoading) {
    return <h5 className="font-bold text-xl">Is loading...</h5>
  }

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {devices?.rows.map(device => (
          <DeviceCard id={device.id} name={device.name} img={device.img} rating={device.rating} key={device.id}
                      price={device.price}/>
        ))}
      </div>
      <Pagination pages={pages} />
    </div>
  );
};
