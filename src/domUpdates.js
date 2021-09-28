export const usernameInput = document.getElementById('usernameInput');
export const passwordInput = document.getElementById('passwordInput');
export const submitLogin = document.getElementById('submitLogin');

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

const domUpdates = {

  welcomeCustomer(customer) {
    customerGreeting.innerText = '';
    customerGreeting.innerText = `Welcome ${customer.name}!`;
  },

  displaySpendings(customer) {
    let spent = hotel.calculateSpending(customer);
    totalSpendings.innerText = `$${spent}`;
  },

  // displayAllRooms(rooms) {
  // },

  displayCurrentBooking(hotel, customer) {
    let currentCustBooking = hotel.getCurrentBooking(customer, currentDate);
    customerBookings.innerHTML = '';
    currentBooking.innerHTML += `<p>We have you booked for today, ${currentCustBooking.date}, in room number ${currentCustBooking.roomNumber}</p>`;
  },

  displayPastBookings(hotel, customer) {
    let pastCustBookings = hotel.getPastBookings(customer, currentDate);
    customerBookings.innerHTML = '';
    pastCustBookings.forEach(booking => {
      customerBookings.innerHTML += `<p>We have you booked for: ${booking.date}, in room number ${booking.roomNumber}.</p>`;
    });
  },

  displayFutureBookings(hotel, customer) {
    let futureCustBookings = hotel.getFutureBookings(customer, currentDate);
    customerBookings.innerHTML = '';
    futureCustBookings.forEach(booking => {
      customerBookings.innerHTML += `<p>You stay with us on: ${booking.date}, in room number ${booking.roomNumber}.</p>`;
    });
  },

  displaySearchResults(year, month, day) {
    dateSearched.innerText = `${year}/${month}/${day}`;
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
