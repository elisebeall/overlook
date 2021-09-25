import customersData from '../src/data/customers.js';

class Customer {
  constructor(customersData) {
    this.id = customersData.id;
    this.name = customersData.name;
  }
  
}

export default Customer;
