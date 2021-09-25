import Booking from '../src/classes/Booking';
import Customer from '../src/classes/Customer';
import Room from '../src/classes/Room';
import bookingsData from '../src/data/bookings.js';
import customersData from '../src/data/customers.js';
import roomsData from '../src/data/rooms.js';
import chai from 'chai';
const assert = chai.assert;

describe('Booking', () => {
  let booking, customer, room;
  beforeEach(() => {
    booking = new Booking();
    customer = new Customer();
    room = new Room();
  });

  it('should be a function', () => {
    assert.typeOf(Booking, 'function');
  });

  it('should have an id', () => {
    assert.equal(booking.id, '5fwrgu4i7k55hl6sz');
  });

  it('should have a userID', () => {
    assert.equal(booking.userID, '9');
  });

  it('should have a date', () => {
    assert.equal(booking.date, '2020/04/22');
  });

  it('should have a room number', () => {
    assert.equal(booking.roomNumber, '15')
  });

  it('should be able to add room service charges to a list', () => {
    assert.deepEqual(booking.roomServiceCharges, []);
  });
});
