const oneWayJson = [
  {
    flightNumber: 'AI-202',
    price: 9000,
    originCity: 'Pune',
    destinationCity: 'Delhi',
    originCityCode: 'PNQ',
    destinationCityCode: 'DEL',
    departDate: '20/09/2017',
    detaprtTime: '3 PM',
    arriveTime: '6 PM',
  },
  {
    flightNumber: 'AI-203',
    price: 8000,
    originCity: 'Pune',
    destinationCity: 'Delhi',
    originCityCode: 'PNQ',
    destinationCityCode: 'DEL',
    departDate: '20/09/2017',
    detaprtTime: '1 PM',
    arriveTime: '5 PM',
  },
  {
    flightNumber: 'AI-204',
    price: 7000,
    originCity: 'Pune',
    destinationCity: 'Delhi',
    originCityCode: 'PNQ',
    destinationCityCode: 'DEL',
    departDate: '20/09/2017',
    detaprtTime: '10 AM',
    arriveTime: '4 PM',
  }
];

const twoWayJson = [
  {
    gFlightNumber: 'AI-202',
    gPrice: 9000,
    originCity: 'Pune',
    destinationCity: 'Delhi',
    departDate: '20/09/2017', // make it IOS string
    gDetaprtTime: '3 PM',
    gArriveTime: '6 PM',
    rFlightNumber: 'AI-204',
    rPrice: 6000,
    returnDate: '21/09/2017',
    rDetaprtTime: '4 PM',
    rArriveTime: '11 PM',
  }
];

export {
  oneWayJson,
  twoWayJson,
};