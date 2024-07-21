import React, {useState} from 'react';
import {Modal} from "../../../components";
import {Button, Input} from "../../../ui";
import {DeviceApi} from "../../../store/services/DeviceService";

interface CreateTypeProps {
  onHide: () => void;
}

const CreateType: React.FC<CreateTypeProps> = ({onHide}) => {
  const [name, setName] = useState("");
  const [createType] = DeviceApi.useCreateTypeMutation();

  const onCreate = () => {
    if (name) {
      createType({name});
      setName("");
    }
  }

  return (
    <Modal onHide={onHide} title={"Create type"}>
      <form className="space-y-4 md:space-y-6" action="#">
        <Input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} label="Name type"
               type="text" name="name-type" required={true} placeholder="..."/>
        <Button onClick={onCreate} className="w-full">Create type</Button>
      </form>
    </Modal>
  );
};

export default CreateType;