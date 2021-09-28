class Hotel {
  constructor(customers, rooms, bookings) {
    this.customers = customers;
    this.rooms = rooms;
    this.bookings = bookings;
    this.roomDetails = [];
  };

  calculateSpending() {
    let total = this.rooms.reduce((total, room) => {
      total += room.costPerNight;
      return total;
    }, 0);
    return total;
  };

  sortBookingsAscending() {
    this.bookings.sort((a, b) => {
      return a.date - b.date;
    });
    return this.bookings;
  };

  sortBookingsDescending() {
    this.bookings.sort((a, b) => {
      return b.date - a.date;
    });
    return this.bookings;
  };

  getCurrentBooking(customer) {

  }

  getFutureBookings(customer) {

  }

  getPastBookings(customer) {

  }
};

export default Hotel;


//Once the user logs in, an instance of the user class will be created using the
//id from the login credentials.
//The userID will then allow a new instance of the booking class.
//An instance of the dashboard will be the last thing created, and it will take
//the customer, rooms, and bookings as parameters.
//The user will have an ID which corresponds to the userID in the booking class.
//
