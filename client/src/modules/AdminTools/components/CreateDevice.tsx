import React, {useRef, useState} from 'react';
import {Modal} from "../../../components";
import {Button, Input, InputFile} from "../../../ui";
import Dropdown from "../../../components/Dropdown";
import {useAppSelector} from "../../../hooks/reducer";
import AddInfo from "./AddInfo";
import {ICreateInfoItem} from "../helpers";
import AddImage from "./AddImage";
import Dropdowns from "./Dropdowns";
import {DeviceApi} from "../../../store/services/DeviceService";

interface CreateTypeProps {
  onHide: () => void;
}

const CreateDevice: React.FC<CreateTypeProps> = ({onHide}) => {
  const [isBrand, setIsBrand] = useState(false);
  const [currentBrandId, setCurrentBrandId] = useState(0);
  const [isType, setIsType] = useState(false);
  const [currentTypeId, setCurrentTypeId] = useState(0);
  const {data: brands} = DeviceApi.useGetBrandsQuery({});
  const {data: types} = DeviceApi.useGetTypesQuery({});
  const [srcImage, setSrcImage] = useState("");
  const [info, setInfo] = useState<ICreateInfoItem[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState<File | null>(null)
  const [createDevice, {}] = DeviceApi.useCreateDeviceMutation();

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

  const changeInfo = (key: string, value: string, number: number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i));
  }

  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    setFile(e.target.files![0]);
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setSrcImage(reader.result);
      }
    }
    reader.readAsDataURL((e.target.files![0]));
  }

  const onSubmit = () => {
    const formData = new FormData();
    if (file) {
      formData.append("name", name);
      formData.append("price", price);
      formData.append("img", file);
      formData.append("brandId", `${currentBrandId}`);
      formData.append("typeId", `${currentTypeId}`);
      formData.append("info", JSON.stringify(info));

      createDevice(formData);
      onHide();
    }
  }

  return (
    <Modal onHide={onHide} title={"Create device"}>
      <form className="space-y-4 md:space-y-6">
        <Input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} label="Name device"
               type="text" name="name-device" required={true} placeholder="..."/>
        <Input value={price} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)} label="Price device"
               type="number" name="price-device" required={true} placeholder="..."/>
        <Dropdowns changeType={changeType} changeBrand={changeBrand} brands={brands ? brands : []}
                   types={types ? types : []} isBrand={isBrand}
                   isType={isType}
                   currentBrand={currentBrandId > 0 ? `: ${brands && brands[currentBrandId - 1].name}` : ""}
                   currentType={currentTypeId > 0 ? `: ${types && types[currentTypeId - 1].name}` : ""}
                   handlerBrand={handlerBrand} handlerType={handlerType}/>
        <AddInfo onChange={changeInfo} addInfo={addInfo} removeInfo={removeInfo} info={info}/>
        <AddImage changeImage={changeImage} srcImage={srcImage}/>
        <Button onClick={onSubmit} className="w-full">Create device</Button>
      </form>
    </Modal>
  );
};

export default CreateDevice;