interface IPerson {
  firstName: string;
  lastName: string;
  city: string;
}
interface IUser extends IPerson {
  country: string;
}
interface IEmployee extends IPerson {
  branch: string;
}

export { IUser, IEmployee };
