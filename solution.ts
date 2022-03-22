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

console.log(user);
console.log(user.country);
console.log(user.fullName);
console.log(user.getInfo);

console.log(employee);
console.log(employee.branch);
console.log(employee.fullName);
console.log(employee.getInfo);
