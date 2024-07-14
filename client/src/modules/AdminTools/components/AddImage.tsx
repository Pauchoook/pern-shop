import React from 'react';
import {InputFile} from "../../../ui";

interface AddImageProps {
  changeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  srcImage: string;
}

const AddImage: React.FC<AddImageProps> = ({changeImage, srcImage}) => {
  return (
    <>
      <InputFile onChange={changeImage} title="Upload image"/>
      {srcImage && <img width={250} height="auto" src={srcImage} alt="Device image"/>}
    </>
  );
};

export default AddImage;