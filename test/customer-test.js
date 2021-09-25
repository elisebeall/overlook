import Customer from '../src/classes/Customer';
import Booking from '../src/classes/Booking';
import Room from '../src/classes/Room';
import customersData from '../src/data/customers.js';
import bookingsData from '../src/data/bookings.js';
import roomsData from '../src/data/rooms.js';
import chai from 'chai';
const assert = chai.assert;

describe('Customer', () => {
  let customer, booking, room;
  beforeEach(() => {
    customer = new Customer();
    booking = new Booking();
    room = new Room();
  });

  it('should be a function', () => {
    assert.typeOf(Customer, 'function');
  });

  it('should have an id', () => {
    assert.equal(customer.id, '1');
  });

  it('should have a name', () => {
    assert.equal(customer.name, 'Leatha Ullrich');
  });
});
