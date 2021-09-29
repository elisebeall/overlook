import { domUpdates } from './domUpdates';
import { buildHotel, confirmBooking } from './scripts.js'

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

// export const fetchCustomer = (id) => {
//   return fetch(`http://localhost:3001/api/v1/customers/${id}`)
//     .then(manageLogInError)
//     .then(data => instantiateCustomer(data))
//     .catch(error => domUpdates.catchError(error))
// };

export const fetchHotelData = () => {
  Promise.all([fetchRooms(), fetchCustomers(), fetchBookings()])
    .then(data => buildHotel(data))
};

export const bookRoom = (customer, date, room) => {
  fetch(endpoints.bookings, {
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
    //.then(managePostError)
    .then(response => confirmBooking())
    .then(customer => fetchHotelData())
    .catch(error => domUpdates.catchError(error))
};

const manageLogInError = () => {
  if (!response.ok) {
    throw new Error (`Apologies, that user doesn\'t appear to exist. Yet... ${response.status} ${response.status.text}`);
  } else {
    return response.json();
  };
};

const managePostError = () => {
  if (!response.ok) {
    throw new Error (`Zoinks. Something\'s not right here. ${response.status} ${response.status.text}`);
  } else {
    return response.json();
  };
};
