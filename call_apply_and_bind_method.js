const airMyanmar = {
  airLine: 'Air Myanmar',
  iataCode: 'AM',
  booking: [],
  // book(flightNum, name){
  //     console.log(`${name} booked a send on ${this.airLine} flight ${this.iataCode}${flightNum}`);
  //     this.booking.push({flight: `${this.iataCode}${flightNum}`, name})
  // }
}
// airMyanmar.book(101, 'Joseph')
// const booking = airMyanmar.booking
// console.log(booking)



const airBagan = {
    airLine: 'Air Bagan',
    iataCode: 'AB',
    booking: []
}

const book = function (flightNum, name) {
  console.log(
    `${name} booked a send on ${this.airLine} flight ${this.iataCode}${flightNum}`,
  )
  this.booking.push({ flight: `${this.iataCode}${flightNum}`, name })
}

book.call(airMyanmar, 101, 'Joseph');
book.call(airBagan, 102, 'Thang Thang');

const flightData = [103, 'Michael']
book.apply(airMyanmar, flightData)
book.call(airBagan, ...flightData)

const airbagan = book.bind(airBagan)
airbagan(104, 'John');

const airmyanmar = book.bind(airMyanmar, 105)
airmyanmar('CR7')

airMyanmar.planes = 200;
airMyanmar.buyPlanes = function(){
  console.log(this);
  this.planes++;
  console.log(this.planes);
}

// document.querySelector('.buy').addEventListener('click', airMyanmar.buyPlanes.bind(airMyanmar));

const addTxt = (rate, value) => value + value * rate;
console.log(addTxt(0.1, 200));
const addGame = addTxt.bind(null, 0.5);
console.log(addGame(260));