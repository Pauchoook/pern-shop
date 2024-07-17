export interface IType {
  id: number;
  name: string;
}

export interface IBrand {
  id: number;
  name: string;
}

export interface IInfo {
  id: number;
  title: string;
  description: string;
}

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  info?: IInfo[];
}

export interface ICreateDevice {
  name: string;
  price: number;
  rating: number;
  img: string;
  info?: IInfo[];
}

export interface DeviceState {
  types: IType[];
  devices: IDevice[];
  brands: IBrand[],
}