import { domUpdates } from './domUpdates';

const endpoints = {
  rooms: 'http://localhost:3001/api/v1/rooms',
  bookings: 'http://localhost:3001/api/v1/bookings',
  customers: 'http://localhost:3001/api/v1/customers',
  photos: ''
};

export const fetchRooms = () => {
  return fetch(endpoints.rooms)
    .then(response => response.json())
    .catch(error => domUpdates.catchError(error))
};

export const fetchBookings = () => {
  return fetch(endpoints.bookings)
    .then(response => response.json())
    .catch(error => domUpdates.catchError(error))
};

export const fetchCustomers = () => {
  return fetch(endpoints.customers)
    .then(response => response.json())
    .catch(error => domUpdates.catchError(error))
};

export const fetchCustomer = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers/${id}`)
    .then(manageLogInError)
    .then(data => instantiateCustomer(data))
    .catch(error => domUpdates.catchError(error))
};

export const fetchHotelData = () => {
  Promise.all([fetchRooms(), fetchCustomers(), fetchBookings()])
    .then(data => buildDashboard(data))
    .then(() => loadPage())
};

export const bookRoom = (customer, date, room) => {
  return fetch(endpoints.bookings, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userID: customer,
      date: date,
      roomNumber: room
    })
  })
    .then(managePostError)
    .then(() => domUpdates.confirmBooking())
    .then(() => fetchHotelData())
    .catch(error => domUpdates.catchError(error))
};

const managePostError = () => {
  if (!response.ok) {
    throw new Error (`Zoinks. Something\'s not right here. ${response.status} ${response.status.text}`);
  } else {
    return response.json();
  };
};

const manageLogInError = () => {
  if (!response.ok) {
    throw new Error (`Apologies, that user doesn\'t appear to exist. Yet... ${response.status} ${response.status.text}`);
  } else {
    return response.json();
  };
};
