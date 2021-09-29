export const usernameInput = document.getElementById('usernameInput');
export const passwordInput = document.getElementById('passwordInput');
export const submitLogin = document.getElementById('submitLogin');
export const loginRequest = document.getElementById('loginRequest');
export const loginError = document.getElementById('loginError');
export const customerGreeting = document.getElementById('customerGreeting');
export const totalSpendings = document.getElementById('totalSpendings');
export const roomSearch = document.getElementById('roomSearch');
export const customerBookings = document.getElementById('customerBookings');
export const dashboard = document.getElementById('dashboard');
export const customerSearch = document.getElementById('customerSearch');
export const bookRoom = document.getElementById('bookRoom');
export const checkout = document.getElementById('checkout');
export const dateResults = document.getElementById('dateResults');
export const filterType = document.getElementById('filterType');
export const dateSearched = document.getElementById('dateSearched');
export const singleRoom = document.getElementById('singleRoom');
export const juniorSuite = document.getElementById('juniorSuite');
export const suite = document.getElementById('suite');
export const resSuite = document.getElementById('resSuite');
export const searchResults = document.getElementById('searchResults');

export const domUpdates = {

  welcomeCustomer(customer) {
    customerGreeting.innerText = '';
    customerGreeting.innerText = `Welcome ${customer.name}!`;
  },

  displaySpendings(hotel, custBookings) {
    let spent = hotel.calculateSpendings(custBookings);
    totalSpendings.innerText = '';
    totalSpendings.innerText += `$${spent}`;
  },

  displayCustomerBookings(hotel, customer) {
    event.preventDefault();
    let custBookings = hotel.getCustomerBookings(customer);
    this.displaySpendings(hotel, custBookings);
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
    searchResults.innerHTML = '';
    roomDetails.forEach(room => {
      if (!roomDetails.length) {
        searchResults.innerHTML += 'So very sorry!  It appears we have no rooms available for that date.';
      } else {
        let hasBidet;
        room.bidet ? hasBidet = 'has' : hasBidet = 'does not have';
        //add roomnumber as the id for each room
        searchResults.innerHTML += `<article class="room-display" id="${room.number}">Room #${room.number} is a ${room.roomType} with ${room.numBeds} ${room.bedSize} bed(s) and it ${hasBidet} a bidet. It costs $${room.costPerNight}.</article>`;
      }
    });
  },

  displayRoomsFiltered(year, month, day, hotel, roomType) {
    event.preventDefault();
    filterType.innerText = `${roomType}`;
    let date = `${year}/${month}/${day}`;
    dateSearched.innerText = `${date}`;
    let roomDetails = hotel.searchBookings(date);
    searchResults.innerHTML = '';

    let filteredRooms = roomDetails.reduce((acc, room) => {
      if (room.roomType === roomType) {
        acc.push(room);
      };
      return acc;
    }, []);

    if (!filteredRooms.length) {
      searchResults.innerHTML += 'So very sorry!  It appears we have no rooms of that type available for that date.';
    } else {
      filteredRooms.forEach(room => {
        let hasBidet;
        room.bidet ? hasBidet = 'has' : hasBidet = 'does not have';
        searchResults.innerHTML += `<article class="room-display" id="${room.number}"><button class="book-room" id="bookRoom">Book Room</button>Room #${room.number} is a ${room.roomType} with ${room.numBeds} ${room.bedSize} bed(s) and it ${hasBidet} a bidet. It costs $${room.costPerNight}.</article>`;
      });
    };
  },

  displayBookingConfirmation() {
    hide(searchResults);
    show(checkout);
    checkout.innerText = '';
    checkout.innerText += 'This is where the Overlook takes your money.';
  },

  catchError(error) {
    //something has gone wrong
  },

  show(element) {
    element.classList.remove('hidden');
  },

  hide(element) {
    element.classList.add('hidden');
  }
};

export default domUpdates;
