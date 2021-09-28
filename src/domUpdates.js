export const usernameInput = document.getElementById('usernameInput');
export const passwordInput = document.getElementById('passwordInput');
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
  logInCustomer(event) {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if ((username.length < 9 || username.length > 10) || password.length !== 12) {
      this.show(loginError);
    } else {
      const customerID = getUserDetails(username);
      const customerDetails = hotel.getCustomerDetails(customerID);
    }
  },

  welcomeCustomer(customer) {
    customerGreeting.innerText = '';
    customerGreeting.innerText = `Welcome ${customer.name}`;
  },

  displaySpendings(customer) {
    let spent = hotel.calculateSpending(customer);
    totalSpendings.innerText = `$${spent}`;
  },

  displayAllRooms(rooms) {
  },

  displayCurrentBooking(hotel, customer) {
    let currentBooking = hotel.getCurrentBooking(customer);
    customerBookings.innerHTML = '';
    currentBooking.innerHTML = ``;
  },

  displayPastBookings(hotel, customer) {
    let pastBookings = hotel.getPastBookings(customer);
    customerBookings.innerHTML = '';
    pastBookings.forEach(booking => {
      customerBookings.innerHTML += ``;
    });
  },

  displayFutureBookings(hotel, customer) {
    let futureBookings = hotel.getFutureBookings(customer);
    customerBookings.innerHTML = '';
    futureBookings.forEach(booking => {
      customerBookings.innerHTML += ``;
    });
  },

  displaySearchResults(year, month, day, hotel) {

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
