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

