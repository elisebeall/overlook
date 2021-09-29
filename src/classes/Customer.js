//import { customersData } from '../data/customers.js';

class Customer {
  constructor(customersData) {
    this.id = customersData.id;
    this.name = customersData.name;
    this.username = `customer${this.id}`;
    this.password = 'overlook2021';
  }
}

export default Customer;
