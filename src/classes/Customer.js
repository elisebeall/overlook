import { customersData } from '../data/customers.js';

class Customer {
  constructor(customersData) {
    this.id = customersData.id;
    this.name = customersData.name;
    this.spent = 0;
  }
}

export default Customer;
