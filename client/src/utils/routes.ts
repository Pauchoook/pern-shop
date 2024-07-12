import {IRoute} from "./types";
import {paths} from "./paths";
import {Shop, Device, Registration, Login, Admin} from "../pages";

export const authRoutes: IRoute[] = [
  {
    path: paths.ADMIN_ROUTE,
    Component: Admin
  }
]

export const publicRoutes: IRoute[] = [
  {
    path: paths.SHOP_ROUTE,
    Component: Shop
  },
  {
    path: paths.LOGIN_ROUTE,
    Component: Login
  },
  {
    path: paths.REGISTRATION_ROUTE,
    Component: Registration
  },
  {
    path: paths.DEVICE_ROUTE + "/:id",
    Component: Device
  }
]