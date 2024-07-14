import React from 'react';
import {Button, Input} from "../../../ui";
import {ICreateInfoItem} from "../helpers";

interface AddInfoProps {
  addInfo: () => void;
  removeInfo: (val: number) => void;
  info: ICreateInfoItem[];
}

const AddInfo: React.FC<AddInfoProps> = ({addInfo, removeInfo, info}) => {
  return (
    <>
      <hr className="h-px my-8 bg-white border-0"/>
      <Button onClick={addInfo}>Added specification</Button>
      {info.map(info => (
        <div className="mt-2 flex items-end gap-2" key={info.number}>
          <Input onChange={(e) => {
          }} label="Title specification" type="text" name="title-specification" required={true} placeholder="..."/>
          <Input onChange={(e) => {
          }} label="Description specification" type="text" name="title-specification" required={true}
                 placeholder="..."/>
          <Button onClick={() => removeInfo(info.number)} className="bg-red-400">Remove</Button>
        </div>
      ))}
      <hr className="h-px my-8 bg-white border-0"/>
    </>
  );
};

export default AddInfo;