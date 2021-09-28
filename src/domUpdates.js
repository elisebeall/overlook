export const usernameInput = document.getElementById('usernameInput');
export const passwordInput = document.getElementById('passwordInput');
export const submitLogin = document.getElementById('submitLogin');
export const loginRequest = document.getElementById('loginRequest');
export const loginError = document.getElementById('loginError');

export const customerGreeting = document.getElementById('customerGreeting');
export const totalSpendings = document.getElementById('totalSpendings');
export const customerBookings = document.getElementById('customerBookings');
export const customerSearch = document.getElementById('customerSearch');
// export const pickDate = document.getElementById('pickDate');
// export const pickNewDate = document.getElementById('pickNewDate');
export const bookRoom = document.getElementById('bookRoom');
export const checkout = document.getElementById('checkout');
export const dateResults = document.getElementById('dateResults');
export const dateSearched = document.getElementById('dateSearched');

export const singleRoom = document.getElementById('singleRoom');
export const juniorSuite = document.getElementById('juniorSuite');
export const suite = document.getElementById('suite');
export const resSuite = document.getElementById('resSuite');
export const gridContainer = document.getElementById('gridContainer');

export const domUpdates = {

  welcomeCustomer(customer) {
    customerGreeting.innerText = '';
    customerGreeting.innerText = `Welcome ${customer.name}!`;
  },

  displaySpendings(hotel, customer) {
    console.log(customer)
    let spent = hotel.calculateSpending(customer);
    totalSpendings.innerText = `$${spent}`;
  },

  // displayAllRooms(rooms) {
  // },

  displayCustomerBookings(hotel, customer) {
    event.preventDefault();
    let custBookings = hotel.getCustomerBookings(customer);
    customerBookings.innerHTML = '';
    custBookings.forEach(booking => {
      customerBookings.innerHTML += `<p>We have you booked for: ${booking.date}, in room number ${booking.roomNumber}.</p>`;
    });
  },

  displaySearchResults(year, month, day, hotel) {
    event.preventDefault();
    let date = `${year}/${month}/${day}`;
    dateSearched.innerText = `${date}`;
    let roomDetails = hotel.searchBookings(date);
    gridContainer.innerHTML = '';
    roomDetails.forEach(room => {
      gridContainer.innerHTML += `Room #${room.number} is a ${room.roomType} with ${room.numBeds} ${room.bedSize} bed(s). It costs $${room.costPerNight}.<br>Has bidet? ${room.bidet}`;
    });
  },

  confirmBooking() {
    checkout.innerText = '';
    checkout.innerText += 'This is where the Overlook takes your money.';
  },

  catchError(error) {

  },

  show(element) {
    element.classList.remove('hidden');
  },

  hide(element) {
    element.classList.add('hidden');
  }
};

export default domUpdates;
