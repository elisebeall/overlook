import Hotel from '../src/classes/Hotel';
import Room from '../src/classes/Room';
import Customer from '../src/classes/Customer';
import Booking from '../src/classes/Booking';
import roomsData from '../src/data/rooms.js';
import customersData from '../src/data/customers.js';
import bookingsData from '../src/data/bookings.js';
import chai from 'chai';
const assert = chai.assert;

describe('Hotel', () => {
  let hotel, search, room, customer, booking;
  beforeEach(() => {
    hotel = new Hotel();
    room = new Room(roomsData);
    customer = new Customer(customersData);
    booking = new Booking(bookingsData);
  });

  it('should be a function', () => {
    assert.typeOf(Hotel, 'function');
  });

  it('should have a list of all of the bookings', () => {
    assert.deepEqual(hotel.bookings, []);
  });

  it('should give a total amount spent', () => {
    let spent = hotel.calculateSpending();
    assert.equal(spent, 1000);
  });
});
