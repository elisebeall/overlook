class Hotel {
  constructor(customers, rooms, bookings) {
    this.customers = customers;
    this.rooms = rooms;
    this.bookings = bookings;
    this.customerBookings = [];
    this.roomDetails = [];
  };

  getCustomerDetails(userID) {
    let customerDetails = this.customers.find(customer => customer.id === userID);
    return customerDetails;
  }

  getCustomerBookings(userID) {
    this.customerBookings = this.bookings.filter(booking => booking.userID === userID);
    return this.customerBookings;
  }

  calculateSpending(userID) {
    let total = this.rooms.reduce((total, room) => {

      total += room.costPerNight;
      return total;
    }, 0);
    return total;
  };

  getCurrentBooking(customer, currentDate) {
    return currentBooking = customer.bookings.find(booking => booking.date === currentDate);
  };

  getFutureBookings(customer, currentDate) {
    return futureBookings = customer.bookings.filter(booking => booking.date > currentDate);
  };

  getPastBookings(customer, currentDate) {
    return pastBookings = customer.bookings.filter(booking => booking.date < currentDate);
  };
};

export default Hotel;


//Once the user logs in, an instance of the user class will be created using the
//id from the login credentials.
//The userID will then allow a new instance of the booking class.
//An instance of the dashboard will be the last thing created, and it will take
//the customer, rooms, and bookings as parameters.
//The user will have an ID which corresponds to the userID in the booking class.
//
