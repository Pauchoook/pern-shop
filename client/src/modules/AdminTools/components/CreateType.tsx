import React from 'react';
import {Modal} from "../../../components";
import {Button, Input} from "../../../ui";

interface CreateTypeProps {
  onHide: () => void;
}

const CreateType: React.FC<CreateTypeProps> = ({onHide}) => {
  return (
    <Modal onHide={onHide} title={"Create type"}>
      <form className="space-y-4 md:space-y-6" action="#">
        <Input onChange={(e) => {
        }} label="Name type" type="text" name="name-type" required={true} placeholder="..."/>
        <Button className="w-full">Create type</Button>
      </form>
    </Modal>
  );
};

export default CreateType;