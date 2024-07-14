export interface IUser {
  email: string;
  password: string;
  role?: string;
}

export interface UserState {
  isAuth: boolean;
  user: IUser | null;
  error: string;
}