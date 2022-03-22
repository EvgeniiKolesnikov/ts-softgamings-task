import { IUser, IEmployee, IPerson } from './interfaces';

class Person implements IPerson {
  public firstName: string;
  public lastName: string;
  public city: string;

  public set fullName(value: string) {
    const fn: string[] = value.split(' ');
    this.firstName = fn[0];
    this.lastName = fn[1];
  }

  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class User extends Person implements IUser {
  public country: string;
  
  public get getInfo() {
    return `FullName: ${this.fullName}, City: ${this.city}, Country: ${this.country}`;
  }
}

class Employee extends Person implements IEmployee {
  public branch: string;

  public get getInfo() {
    return `FullName: ${this.fullName}, City: ${this.city}, Branch: ${this.branch}`;
  }
}

let user = new User();
user.firstName = 'Evgenii';
user.lastName = 'Kolesnikov';
user.city = 'Vrn';
user.country = 'Rus'

let employee = new Employee();
employee.fullName = 'Elon Musk';
employee.city = 'NY';
employee.branch = 'Dev'

// tsc --target es2015 --module none .\solution.ts
// node .\solution.js

console.log(user);              // User {firstName: 'Evgenii', ... }
console.log(user.firstName);    // Evgenii
console.log(user.lastName);     // Kolesnikov
console.log(user.country);      // Rus
console.log(user.fullName);     // Evgenii Kolesnikov
console.log(user.getInfo);      // FullName: Evgenii Kolesnikov, City: Vrn, Country: Rus

console.log(employee);          // Employee {firstName: 'Elon', ... }
console.log(employee.firstName);// Elon 
console.log(employee.lastName); // Musk 
console.log(employee.branch);   // Dev 
console.log(employee.fullName); // Elon Musk
console.log(employee.getInfo);  // FullName: Elon Musk, City: NY, Branch: Dev
