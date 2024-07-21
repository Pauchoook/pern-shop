import React, {useState} from 'react';
import {Modal} from "../../../components";
import {Button, Input} from "../../../ui";
import {DeviceApi} from "../../../store/services/DeviceService";

interface CreateTypeProps {
  onHide: () => void;
}

const CreateBrand: React.FC<CreateTypeProps> = ({onHide}) => {
  const [name, setName] = useState("");
  const [createBrand] = DeviceApi.useCreateBrandMutation();

  const onCreate = () => {
    if (name) {
      createBrand({name});
      setName("");
    }
  }

  return (
    <Modal onHide={onHide} title={"Create brand"}>
      <form className="space-y-4 md:space-y-6" action="#">
        <Input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
               label="Name brand" type="text" name="name-brand" required={true} placeholder="..."/>
        <Button onClick={onCreate} className="w-full">Create type</Button>
      </form>
    </Modal>
  );
};

export default CreateBrand;