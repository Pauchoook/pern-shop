import React from 'react';
import {Modal} from "../../../components";
import {Button, Input} from "../../../ui";

interface CreateTypeProps {
  onHide: () => void;
}

const CreateBrand: React.FC<CreateTypeProps> = ({onHide}) => {
  return (
    <Modal onHide={onHide} title={"Create brand"}>
      <form className="space-y-4 md:space-y-6" action="#">
        <Input onChange={(e) => {
        }} label="Name brand" type="text" name="name-brand" required={true} placeholder="..."/>
        <Button className="w-full">Create brand</Button>
      </form>
    </Modal>
  );
};

export default CreateBrand;