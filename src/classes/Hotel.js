class Hotel {
  constructor(rooms, customers, bookings) {
    this.customers = customers;
    this.rooms = rooms;
    this.bookings = bookings;
    this.customerBookings = [];
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

  calculateSpendings(custBookings) {
    let totalSpent = 0;
    custBookings.forEach(booking => {
      this.rooms.forEach(room => {
        if (booking.roomNumber === room.number) {
          totalSpent += room.costPerNight;
        }
      });
    });

    return totalSpent.toFixed(2);
  };

  searchBookings(date) {
    let bookedRoomNumbers = this.bookings.reduce((acc, booking) => {
      if (booking.date === date) {
        acc.push(booking.roomNumber);
      };
      return acc;
    }, []);

    let freeRoomsforDate = this.rooms.reduce((acc, room) => {
      if (!bookedRoomNumbers.includes(room.number)) {
        acc.push(room);
      };
      return acc;
    }, []);

    return freeRoomsforDate;
  };

};

export default Hotel;
