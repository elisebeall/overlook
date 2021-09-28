import Customer from '../src/classes/Customer';
import Booking from '../src/classes/Booking';
import Room from '../src/classes/Room';
import Hotel from '../src/classes/Hotel';
import customersData from '../src/data/customers.js';
import bookingsData from '../src/data/bookings.js';
import roomsData from '../src/data/rooms.js';
import chai from 'chai';
const assert = chai.assert;

describe('Customer', () => {
  let customer1, customer2, booking, room, hotel;
  beforeEach(() => {
    customer1 = new Customer(customersData[0]);
    customer2 = new Customer(customersData[1]);
    booking = new Booking(bookingsData);
    room = new Room(roomsData);
    hotel = new Hotel(customersData, roomsData, bookingsData);
  });

  it('should be a function', () => {
    assert.typeOf(Customer, 'function');
  });

  it('should have an id', () => {
    assert.equal(customer1.id, '1');
    assert.equal(customer2.id, '2');
  });

  it('should have a name', () => {
    assert.equal(customer1.name, 'Leatha Ullrich');
    assert.equal(customer2.name, 'Rocio Schuster');
  });
});
