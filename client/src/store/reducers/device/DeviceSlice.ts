import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DeviceState, IType, IBrand, IDevice} from "../../../utils/types";

const initialState: DeviceState = {
  types: [
    {id: 1, name: 'Refrigerators'},
    {id: 2, name: 'Smartphones'},
    {id: 3, name: 'Refrigerators1'},
    {id: 4, name: 'Smartphones1'},
    {id: 5, name: 'Refrigerators2'},
    {id: 6, name: 'Smartphones2'}
  ],
  brands: [
    {id: 1, name: 'Samsung'},
    {id: 2, name: 'Apple'},
    {id: 3, name: 'Samsung1'},
    {id: 4, name: 'Apple1'},
    {id: 5, name: 'Samsung2'},
    {id: 6, name: 'Apple2'}
  ],
  devices: [
    {
      id: 1,
      name: 'Iphone 12 pro',
      price: 25000,
      rating: 5,
      img: 'https://msk-apple.ru/image/cache/catalog/apple12/apple%2012%20pro/apple12pro_grey_1-350x450.jpg'
    },
    {
      id: 2,
      name: 'Iphone 12 pro',
      price: 25000,
      rating: 5,
      img: 'https://msk-apple.ru/image/cache/catalog/apple12/apple%2012%20pro/apple12pro_grey_1-350x450.jpg'
    },
    {
      id: 3,
      name: 'Iphone 12 pro',
      price: 25000,
      rating: 5,
      img: 'https://msk-apple.ru/image/cache/catalog/apple12/apple%2012%20pro/apple12pro_grey_1-350x450.jpg'
    },
    {
      id: 4,
      name: 'Iphone 12 pro',
      price: 25000,
      rating: 5,
      img: 'https://msk-apple.ru/image/cache/catalog/apple12/apple%2012%20pro/apple12pro_grey_1-350x450.jpg'
    }
  ],
}

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setTypes(state, action: PayloadAction<IType[]>) {
      state.types = action.payload;
    },
    setBrands(state, action: PayloadAction<IBrand[]>) {
      state.brands = action.payload;
    },
  },
})

export default deviceSlice.reducer