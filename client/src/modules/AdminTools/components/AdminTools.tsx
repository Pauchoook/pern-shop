import React, {useState} from 'react';
import {Button} from "../../../ui";
import CreateType from "./CreateType";
import CreateBrand from "./CreateBrand";
import CreateDevice from "./CreateDevice";

export const AdminTools = () => {
  const [isType, setIsType] = useState(false);
  const [isBrand, setIsBrand] = useState(false);
  const [isDevice, setIsDevice] = useState(false);

  return (
    <div className="max-w-[300px] flex flex-col gap-3 w-full">
      <Button onClick={() => setIsType(true)} className="w-full">Add type</Button>
      {isType && <CreateType onHide={() => setIsType(false)}/>}
      <Button onClick={() => setIsBrand(true)} className="w-full">Add brand</Button>
      {isBrand && <CreateBrand onHide={() => setIsBrand(false)}/>}
      <Button onClick={() => setIsDevice(true)} className="w-full">Add device</Button>
      {isDevice && <CreateDevice onHide={() => setIsDevice(false)}/>}
    </div>
  );
};
