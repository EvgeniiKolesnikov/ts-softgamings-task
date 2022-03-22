export interface IPerson {
  firstName: string;
  lastName: string;
  city: string;
}
export interface IUser extends IPerson {
  country: string;
}
export interface IEmployee extends IPerson {
  branch: string;
}
