import Booking from '../src/classes/Booking';
import Customer from '../src/classes/Customer';
import Room from '../src/classes/Room';
import Hotel from '../src/classes/Hotel';
import bookingsData from '../src/data/bookings.js';
import customersData from '../src/data/customers.js';
import roomsData from '../src/data/rooms.js';
import chai from 'chai';
const assert = chai.assert;

describe('Booking', () => {
  let booking1, booking2, customer, room, hotel;
  beforeEach(() => {
    booking1 = new Booking(bookingsData[0]);
    booking2 = new Booking(bookingsData[1]);
    customer = new Customer(customersData);
    room = new Room(roomsData);
    hotel = new Hotel(customersData, roomsData, bookingsData);
  });

  it('should be a function', () => {
    assert.typeOf(Booking, 'function');
  });

  it('should have an id', () => {
    assert.equal(booking1.id, '5fwrgu4i7k55hl6sz');
    assert.equal(booking2.id, '5fwrgu4i7k55hl6t5');
  });

  it('should have a userID', () => {
    assert.equal(booking1.userID, '9');
    assert.equal(booking2.userID, '43');
  });

  it('should have a date', () => {
    assert.equal(booking1.date, '2020/04/22');
    assert.equal(booking2.date, '2020/01/24');
  });

  it('should have a room number', () => {
    assert.equal(booking1.roomNumber, '15');
    assert.equal(booking2.roomNumber, '24');
  });

  it('should be able to add room service charges to a list', () => {
    assert.deepEqual(booking1.roomServiceCharges, []);
    assert.deepEqual(booking2.roomServiceCharges, []);
  });

  it('should be able to create a new booking', () => {

    assert.equal();
  });
});
