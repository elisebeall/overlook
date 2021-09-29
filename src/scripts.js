import './css/base.scss';
import './images/turing-logo.png';

import domUpdates from './domUpdates';
import { fetchRooms, fetchBookings, fetchCustomers, bookRoom } from './apiCalls';
import Customer from './classes/Customer';
import Booking from './classes/Booking';
import Room from './classes/Room';
import Hotel from './classes/Hotel';

let dayjs = require('dayjs');
let currentDate = dayjs(Date.now()).format('YYYY-MM-DD');
let hotel, customers, bookings, rooms;
let year, month, day;
let currentCustomer;

window.addEventListener('load', loadPage);
submitLogin.addEventListener('click', logInCustomer);
roomSearch.addEventListener('click', displaySearchPage);
submitSearch.addEventListener('click', searchRooms);
singleRoom.addEventListener('click', filterRoom);
juniorSuite.addEventListener('click', filterRoom);
suite.addEventListener('click', filterRoom);
resSuite.addEventListener('click', filterRoom);
searchResults.addEventListener('click', addBooking);
checkout.addEventListener('click', displaySearchPage);
confirmation.addEventListener('click', displaySearchPage);

function loadPage() {
  importData();
};

function importData() {
  Promise.all([fetchRooms(), fetchCustomers(), fetchBookings()])
    .then(data => buildHotel(data))
};

export const buildHotel = (data) => {
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
    if (currentCustomer.password === password) {
      domUpdates.hide(login);
      domUpdates.show(dashboard);
      displayDashboard(currentCustomer);
    }
  };
};

function getIdFromUsername(username) {
  let idFromUsername = parseInt(username.replace(/\D/g, ""));
  return idFromUsername;
};

function displayDashboard(customer) {
  domUpdates.welcomeCustomer(customer);
  domUpdates.displayCustomerBookings(hotel, customer);
};

function displaySearchPage() {
  event.preventDefault();
  domUpdates.hide(dashboard);
  domUpdates.show(customerSearch);
};

function searchRooms() {
  domUpdates.show(dateResults)
  year = dateYear.value;
  month = dateMonth.value;
  day = dateDay.value;
  domUpdates.displaySearchResults(year, month, day, hotel);
};

function filterRoom(event) {
  event.preventDefault();
  switch (event.target.id) {
    case 'singleRoom':
      console.log(event.target.id);
      domUpdates.displayRoomsFiltered(year, month, day, hotel, 'single room');
      break;
    case 'juniorSuite':
      console.log(event.target.id);
      domUpdates.displayRoomsFiltered(year, month, day, hotel, 'junior suite');
      break;
    case 'suite':
      console.log(event.target.id);
      domUpdates.displayRoomsFiltered(year, month, day, hotel, 'suite');
      break;
    case 'resSuite':
      console.log(event.target.id);
      domUpdates.displayRoomsFiltered(year, month, day, hotel, 'residential suite');
      break;
    default:
      domUpdates.displaySearchResults(year, month, day, hotel);
  };
};

function addBooking() {
  event.preventDefault();
  if (event.target.id === 'bookRoom') {
    let currentRoomNum = parseInt(event.target.parentNode.id);
    bookRoom(currentCustomer.id, `${year}/${month}/${day}`, currentRoomNum);
    domUpdates.displayBookingConfirmation();
  } else {
    domUpdates.displaySearchResults();
  };
};

export const confirmBooking = () => {
  domUpdates.displayBookingConfirmation();
};
