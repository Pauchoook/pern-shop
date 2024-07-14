import React, {useRef, useState} from 'react';
import {Modal} from "../../../components";
import {Button, Input, InputFile} from "../../../ui";
import Dropdown from "../../../components/Dropdown";
import {useAppSelector} from "../../../hooks/reducer";
import AddInfo from "./AddInfo";
import {ICreateInfoItem} from "../helpers";
import AddImage from "./AddImage";
import Dropdowns from "./Dropdowns";

interface CreateTypeProps {
  onHide: () => void;
}

const CreateDevice: React.FC<CreateTypeProps> = ({onHide}) => {
  const [isBrand, setIsBrand] = useState(false);
  const [currentBrandId, setCurrentBrandId] = useState(0);
  const [isType, setIsType] = useState(false);
  const [currentTypeId, setCurrentTypeId] = useState(0);
  const {brands, types} = useAppSelector(state => state.device);
  const [srcImage, setSrcImage] = useState("");
  const [info, setInfo] = useState<ICreateInfoItem[]>([]);

  const addInfo = () => {
    const object = {title: "", description: "", number: Date.now()}
    setInfo([...info, object]);
  }

  const removeInfo = (numInfo: number) => {
    setInfo(info.filter(item => item.number !== numInfo));
  }

  const changeBrand = (brandId: number) => {
    setCurrentBrandId(brandId);
    setIsBrand(false);
  }

  const changeType = (typeId: number) => {
    setCurrentTypeId(typeId);
    setIsType(false);
  }

  const handlerBrand = () => setIsBrand(!isBrand);
  const handlerType = () => setIsType(!isType);

  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setSrcImage(reader.result);
        console.log("srcImage")
      }
    }
    reader.readAsDataURL((e.target.files![0]));
  }

  return (
    <Modal onHide={onHide} title={"Create device"}>
      <form className="space-y-4 md:space-y-6">
        <Input onChange={(e) => {
        }} label="Name device" type="text" name="name-device" required={true} placeholder="..."/>
        <Input onChange={(e) => {
        }} label="Price device" type="number" name="price-device" required={true} placeholder="..."/>
        <Dropdowns changeType={changeType} changeBrand={changeBrand} brands={brands} types={types} isBrand={isBrand}
                   isType={isType}
                   currentBrand={currentBrandId > 0 ? `: ${brands[currentBrandId - 1].name}` : ""}
                   currentType={currentTypeId > 0 ? `: ${types[currentTypeId - 1].name}` : ""}
                   handlerBrand={handlerBrand} handlerType={handlerType}/>
        <AddInfo addInfo={addInfo} removeInfo={removeInfo} info={info}/>
        <AddImage changeImage={changeImage} srcImage={srcImage}/>
        <Button className="w-full">Create device</Button>
      </form>
    </Modal>
  );
};

export default CreateDevice;