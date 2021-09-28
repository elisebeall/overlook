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

const loadPage = () = {
  importData();
};

const importData = () => {
  Promise.all([fetchData(rooms), fetchData(customers), fetchData(bookings)])]
    .then(data => buildDashboard(data))
};

const buildDashboard = (data) => {
  hotel = new Hotel(data[0].rooms, data[1].customers, data[2].bookings);
  customer = new Customer(customersData[0]);
  currentBooking = new Booking(bookingsData[0]);
};

const displayDashboard = () => {
  domUpdates.welcomeCustomer(customer);
  domUpdates.displaySpendings(customer);
  domUpdates.displayCurrentBooking(customer);
  domUpdates.displayPastBookings(customer);
  domUpdates.displayFutureBookings(customer);
};
