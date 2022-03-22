import { IUser, IEmployee } from '../interfaces';

class User implements IUser {
  public firstName: string
  public lastName: string
  public city: string
  public country: string

  constructor (firstName: string, lastName: string, city: string, country: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.country = country;
  }

  public fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public getInfo() {
    return `FullName: ${this.fullName()}, City: ${this.city}, Country: ${this.country}`;
  }
}

let user = new User('Evgenii', 'Kolesnikov', 'Vrn', 'Rus');

// tsc --target es2015 --module none .\old\solution2.ts
// node .\old\solution2.js

console.log(user.fullName())
console.log(user.getInfo())
