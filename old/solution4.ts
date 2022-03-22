import { IUser, IEmployee } from '../interfaces';

//#region User
class User implements IUser {
  public firstName: string;
  public lastName: string;
  public city: string;
  public country: string;

  constructor(
    firstName: string,
    lastName: string,
    city: string,
    country: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.country = country;
  }

  public set fullName(value: string) {
    const fn: string[] = value.split(' ');
    this.firstName = fn[0];
    this.lastName = fn[1];
  }
}
//#endregion

//#region Employee
class Employee implements IEmployee {
  public firstName: string;
  public lastName: string;
  public city: string;
  public branch: string;

  constructor(
    firstName: string,
    lastName: string,
    city: string,
    branch: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.branch = branch;
  }

  public set fullName(value: string) {
    const fn: string[] = value.split(' ');
    this.firstName = fn[0];
    this.lastName = fn[1];
  }
}
//#endregion

abstract class Info {
  public static fullName(obj: User | Employee) {
    return `abstract static fullName: ${obj.firstName} ${obj.lastName}`
  }
  public static getInfo(obj: User | Employee) {
    return `abstract static getInfo: ${obj.firstName} ${obj.lastName} , City: ${obj.city} department`
  }
}

let user = new User('Evgenii', 'Kolesnikov', 'Vrn', 'RF');
console.log(user);
console.log(Info.fullName(user));
console.log(Info.getInfo(user));

// tsc --target es2015 --module none .\old\solution4.ts
// node .\old\solution4.js