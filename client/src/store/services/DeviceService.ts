import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IBrand, ICreateDevice, IDevice, IType} from "../../utils/types";
import {BaseQueryArg} from "@reduxjs/toolkit/dist/query/baseQueryTypes";

interface IResponseGetDevices {
  rows: IDevice[];
  count: number;
}

export const DeviceApi = createApi({
  reducerPath: "deviceApi",
  baseQuery: fetchBaseQuery({baseUrl: `${process.env.REACT_APP_API_URL}/api`}),
  tagTypes: ["MyDevices"],
  endpoints: (build) => ({
    getDevices: build.query<IResponseGetDevices, { limit: number }>({
      query: ({limit}) => ({
        url: `/device?limit=${limit}`
      })
    }),
    getDeviceOne: build.query<IDevice, { id: number }>({
      query: ({id}) => ({
        url: `/device/${id}`
      })
    }),
    getTypes: build.query<IType[], {}>({
      query: () => ({
        url: "/type"
      })
    }),
    getBrands: build.query<IBrand[], {}>({
      query: () => ({
        url: "/brand"
      })
    }),

    createDevice: build.mutation<IDevice, ICreateDevice>({
      query: (body) => ({
        url: "",
        method: "POST",
        body
      })
    })
  })
});