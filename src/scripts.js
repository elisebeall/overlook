import './css/base.scss';
import roomsData from '../data/roomsData';
import bookingsData from '../data/bookingsData';
import customersData from '../data/customersData';
import domUpdates from './domUpdates';
import { fetchData, fetchCustomer, fetchHotelData } from '.apiCalls';
import Customer from '../classes/Customer';
import Booking from '../classes/Booking';
import Room from '../classes/Room';
import Hotel from '../classes/Hotel';

//need link to it in the index.html
import './images/turing-logo.png';

let dayjs = require('dayjs');
let currentDate = dayjs(Date.now()).format('YYYY-MM-DD');
let hotel, customer, booking, room, roomsData, bookingsData, customersData;

const {
  usernameInput,
  passwordInput,
  submitLogin,
  customerGreeting,
  totalSpendings,
  customerBookings,
  customerSearch,
  bookRoom,
  checkout,
  dateResults,
  dateSearched,
  singleRoom,
  juniorSuite,
  suite,
  resSuite
} = domUpdates;

submitLogin.addEventListener('click', logInCustomer);



const loadPage = () = {
  importData();
};

const importData = () => {
  Promise.all([fetchData(rooms), fetchData(customers), fetchData(bookings)])]
    .then(data => buildHotel(data))
};

const buildHotel = (data) => {
  hotel = new Hotel(data[0].rooms, data[1].customers, data[2].bookings);
  customer = new Customer();
  currentBooking = new Booking();
};

const logInCustomer = (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  if ((username.length < 9 || username.length > 10) || password.length !== 12) {
    domUpdates.show(loginError);
  } else {
    const customerID = getIdFromUsername(username);
    const customerDetails = hotel.getCustomerDetails(customerID);
  }
  dislayDashboard(customerDetails);
};

const getIdFromUsername = (username) => {
  
};

const displayDashboard = (customer) => {
  domUpdates.welcomeCustomer(customer);
  domUpdates.displaySpendings(customer);
  domUpdates.displayCurrentBooking(hotel, customer, currentDate);
  domUpdates.displayPastBookings(hotel, customer, currentDate);
  domUpdates.displayFutureBookings(hotel, customer, currentDate);
};

const searchRooms = (date, roomType) => {
  const year = dateYear.value;
  const month = dateMonth.value;
  const day = dateDay.value;
  domUpdates.displaySearchResults(year, month, day);
};
