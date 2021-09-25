import Room from '../src/classes/Room';
import Customer from '../src/classes/Customer';
import Booking from '../src/classes/Booking';
import roomsData from '../src/data/rooms.js';
import customersData from '../src/data/customers.js';
import bookingsData from '../src/data/bookings.js';
import chai from 'chai';
const assert = chai.assert;

describe('Room', () => {
  let room, customer, booking;
  beforeEach(() => {
    room = new Room();
    customer = new Customer();
    booking = new Booking();
  });

  it('should be a function', () => {
    assert.typeOf(Room, 'function');
  });

  it('should have a number', () => {
    assert.equal(room.number, '1');
  });

  it('should have a type', () => {
    assert.equal(room.type, 'residential suite');
  });

  it('should either have a bidet, or not', () => {
    assert.equal(room.bidet, true);
  });

  it('should have a bed size', () => {
    assert.equal(room.bedSize, 'queen');
  });

  it('should have a number of beds', () => {
    assert.equal(room.numBeds, 1);
  });

  it('should have a price for one night', () => {
    assert.equal(room.costPerNight, 358.4);
  });
});
