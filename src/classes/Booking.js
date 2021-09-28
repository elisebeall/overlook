import { bookingsData } from '../data/bookings.js';

class Booking {
  constructor(bookingsData) {
    this.id = bookingsData.id;
    this.userID = bookingsData.userID;
    this.date = bookingsData.date;
    this.roomNumber = bookingsData.roomNumber;
    this.roomServiceCharges = [];
  };

  createNewBooking(id, userID, date, roomNumber) {

  };
};

export default Booking;
