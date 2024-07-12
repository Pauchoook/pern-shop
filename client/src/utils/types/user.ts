export interface IUser {

}

export interface UserState {
  isAuth: boolean;
  user: IUser | null;
}