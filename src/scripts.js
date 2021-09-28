import './css/base.scss';
// import roomsData from '../data/roomsData';
// import bookingsData from '../data/bookingsData';
// import customersData from '../data/customersData';
import domUpdates from './domUpdates';
import { fetchRooms, fetchBookings, fetchCustomers } from './apiCalls';
import Customer from './classes/Customer';
import Booking from './classes/Booking';
import Room from './classes/Room';
import Hotel from './classes/Hotel';

//need link to it in the index.html
import './images/turing-logo.png';

let dayjs = require('dayjs');
let currentDate = dayjs(Date.now()).format('YYYY-MM-DD');
let hotel, customers, bookings, rooms;
let currentCustomer;

window.addEventListener('load', loadPage);
submitLogin.addEventListener('click', logInCustomer);
submitSearch.addEventListener('click', searchRooms);
singleRoom.addEventListener('click', filterSingleRoom);
juniorSuite.addEventListener('click', filterJuniorSuite);
suite.addEventListener('click', filterSuite);
resSuite.addEventListener('click', filterResSuite);
bookRoom.addEventListener('click', domUpdates.confirmBooking());

function loadPage() {
  importData();
};

function importData() {
  Promise.all([fetchRooms(), fetchCustomers(), fetchBookings()])
    .then(data => buildHotel(data))
};

function buildHotel(data) {
  hotel = new Hotel(data[0].rooms, data[1].customers, data[2].bookings);
};

function logInCustomer(event) {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  if ((username.length < 9 || username.length > 10) || password.length !== 12) {
    domUpdates.show(loginError);
  } else {
    const customerID = getIdFromUsername(username);
    const customerProfile = hotel.getCustomerProfile(customerID);
    currentCustomer = new Customer(customerProfile);
    displayDashboard(currentCustomer);
  };
};

function getIdFromUsername(username) {
  let idFromUsername = parseInt(username.replace(/\D/g, ""));
  return idFromUsername;
};

function displayDashboard(customer) {
  domUpdates.welcomeCustomer(customer);
  domUpdates.displaySpendings(hotel, customer);
  domUpdates.displayCustomerBookings(hotel, customer);
};

function searchRooms() {
  const year = dateYear.value;
  const month = dateMonth.value;
  const day = dateDay.value;
  domUpdates.displaySearchResults(year, month, day, hotel);
};

function filterSingleRoom() {

};

function filterJuniorSuite() {

};

function filterSuite() {

};

function filterResSuite() {

};
