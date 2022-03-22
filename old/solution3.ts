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

  public static fullName(obj: User) {
    return `${obj.firstName} ${obj.lastName}`;
  }

  public static getInfo(obj: User) {
    return `Static FullName: ${obj.firstName} ${obj.lastName}`;
  }
}

let user = new User('Evg', 'Ko', 'Vrn', 'RF');
user.fullName = 'John Doe';
console.log(user);
console.log(User.fullName(user));
console.log(User.getInfo(user));

// tsc --target es2015 --module none .\old\solution3.ts
// node .\old\solution3.js
