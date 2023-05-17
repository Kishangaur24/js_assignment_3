//Encapsulation in JavaScript is a principle of object-oriented programming (OOP) that involves bundling data 
//and the methods that operate on that data into a single unit, known as an object. 
// It helps in organizing and structuring code by hiding internal implementation details 
// and providing an interface to interact with the object. This allows for better code maintenance,
// reusability, and security.

// Employee class encapsulating properties and methods
class Employee {
    constructor(name, age, salary) {
      this.name = name;
      this.age = age;
      this.salary = salary;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
    }
  
    increaseSalary(amount) {
      this.salary += amount;
    }
  }
  
  // Creating an instance of the Employee class
  const employee1 = new Employee("John Doe", 30, 5000);
  
  // Accessing the properties and methods
  console.log(employee1.name); // Output: John Doe
  console.log(employee1.getDetails()); // Output: Name: John Doe, Age: 30, Salary: 5000
  
  employee1.increaseSalary(2000);
  console.log(employee1.getDetails()); // Output: Name: John Doe, Age: 30, Salary: 7000
  