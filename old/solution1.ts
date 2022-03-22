import { IUser, IEmployee } from '../interfaces';

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

  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public get getInfo() {
    return `FullName: ${this.fullName}, City: ${this.city}, Country: ${this.country}`;
  }
}

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

  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public get getInfo() {
    return `FullName: ${this.fullName}, City: ${this.city}, Branch: ${this.branch}`;
  }
}
//#endregion

let user = new User('Evgenii', 'Kolesnikov', 'Vrn', 'Rus');

// tsc --target es2015 --module none .\old\solution1.ts
// node .\old\solution1.js

console.log(user);
console.log(user.fullName);
console.log(user.getInfo);
