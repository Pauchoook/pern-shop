import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IBrand, ICreateDevice, IDevice, IType, ICreateTypeBrand} from "../../utils/types";
import {getCookie} from "../../http/axios";

interface IResponseGetDevices {
  rows: IDevice[];
  count: number;
}

export const DeviceApi = createApi({
  reducerPath: "deviceApi",
  baseQuery: fetchBaseQuery({baseUrl: `${process.env.REACT_APP_API_URL}/api`}),
  tagTypes: ["Devices", "Types", "Brands"],
  endpoints: (build) => ({
    getDevices: build.query<IResponseGetDevices, { limit: number }>({
      query: ({limit}) => ({
        url: `/device?limit=${limit}`
      }),
      providesTags: ["Devices"]
    }),
    getDeviceOne: build.query<IDevice, { id: number }>({
      query: ({id}) => ({
        url: `/device/${id}`
      })
    }),
    getTypes: build.query<IType[], {}>({
      query: () => ({
        url: "/type"
      }),
      providesTags: ["Types"]
    }),
    getBrands: build.query<IBrand[], {}>({
      query: () => ({
        url: "/brand"
      }),
      providesTags: ["Brands"]
    }),

    createDevice: build.mutation<IDevice, FormData>({
      query: (body) => ({
        url: "/device",
        method: "POST",
        body,
        headers: {
          authorization: `Bearer ${getCookie("token")}`
        },
      }),
    }),

    createType: build.mutation<IType, ICreateTypeBrand>({
      query: (body) => ({
        url: "/type",
        method: "POST",
        body,
        headers: {
          authorization: `Bearer ${getCookie("token")}`
        },
      }),
      invalidatesTags: ["Types"]
    }),
    createBrand: build.mutation<IBrand, ICreateTypeBrand>({
      query: (body) => ({
        url: "/brand",
        method: "POST",
        body,
        headers: {
          authorization: `Bearer ${getCookie("token")}`
        },
      }),
      invalidatesTags: ["Brands"]
    })
  })
});