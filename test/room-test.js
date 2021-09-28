import Room from '../src/classes/Room';
import Customer from '../src/classes/Customer';
import Booking from '../src/classes/Booking';
import Hotel from '../src/classes/Hotel';
import roomsData from '../src/data/rooms.js';
import customersData from '../src/data/customers.js';
import bookingsData from '../src/data/bookings.js';
import chai from 'chai';
const assert = chai.assert;

describe('Room', () => {
  let room1, room2, customer, booking, hotel;
  beforeEach(() => {
    room1 = new Room(roomsData[0]);
    room2 = new Room(roomsData[1]);
    customer = new Customer(customersData);
    booking = new Booking(bookingsData);
    hotel = new Hotel(customersData, roomsData, bookingsData);
  });

  it('should be a function', () => {
    assert.typeOf(Room, 'function');
  });

  it('should have a number', () => {
    assert.equal(room1.number, '1');
    assert.equal(room2.number, '2');
  });

  it('should have a type', () => {
    assert.equal(room1.roomType, 'residential suite');
    assert.equal(room2.roomType, 'suite');
  });

  it('should either have a bidet, or not', () => {
    assert.equal(room1.bidet, true);
    assert.equal(room2.bidet, false);
  });

  it('should have a bed size', () => {
    assert.equal(room1.bedSize, 'queen');
    assert.equal(room2.bedSize, 'full');
  });

  it('should have a number of beds', () => {
    assert.equal(room1.numBeds, 1);
    assert.equal(room2.numBeds, 2);
  });

  it('should have a price for one night', () => {
    assert.equal(room1.costPerNight, 358.4);
    assert.equal(room2.costPerNight, 477.38);
  });
});
