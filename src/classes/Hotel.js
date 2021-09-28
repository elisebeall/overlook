class Hotel {
  constructor(rooms, customers, bookings) {
    this.customers = customers;
    this.rooms = rooms;
    this.bookings = bookings;
    this.customerBookings = [];
    this.roomDetails = [];
  };

  getCustomerProfile(userID) {
    let customerProfile = this.customers.find(customer => userID === customer.id);
    return customerProfile;
  };

  getCustomerBookings(customer) {
    this.bookings.forEach(booking => {
      if (booking.userID === customer.id) {
        this.customerBookings.push(booking);
      }
    });
    return this.customerBookings;
  };

  calculateSpending(customer) {
    let total = this.customerBookings.reduce((acc, booking) => {
      this.rooms.forEach(room => {
        if (booking.roomNumber === room.number) {
          acc += room.costPerNight;
        };
      });
      return acc;
    }, 0);
    return total;
  };

  searchBookings(date) {
    let bookedRoomsByNumber = this.bookings.filter(booking => booking)
    let availableRooms = this.bookings.filter(booking => booking.date !== date);


    console.log('availableRooms',availableRooms)
    //return this.roomDetails;
  }

  postNewBooking() {

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
