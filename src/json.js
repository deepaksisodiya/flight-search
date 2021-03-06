const oneWayJson = [
  {
    flightNumber: 'AI-202',
    price: 5000,
    originCity: 'Pune',
    destinationCity: 'Delhi',
    originCityCode: 'PNQ',
    destinationCityCode: 'DEL',
    departDate: '20/09/2017',
    detaprtTime: '3 PM',
    arriveTime: '6 PM'
  },
  {
    flightNumber: 'AI-203',
    price: 4000,
    originCity: 'Pune',
    destinationCity: 'Delhi',
    originCityCode: 'PNQ',
    destinationCityCode: 'DEL',
    departDate: '20/09/2017',
    detaprtTime: '1 PM',
    arriveTime: '5 PM'
  },
  {
    flightNumber: 'AI-204',
    price: 3000,
    originCity: 'Pune',
    destinationCity: 'Delhi',
    originCityCode: 'PNQ',
    destinationCityCode: 'DEL',
    departDate: '20/09/2017',
    detaprtTime: '10 AM',
    arriveTime: '4 PM'
  }
];

const twoWayJson = [
  {
    price: 7000,
    originCity: 'Pune',
    destinationCity: 'Delhi',
    departDate: '20/09/2017',
    returnDate: '21/09/2017',

    gFlightNumber: 'AI-202',
    rFlightNumber: 'AI-203',
    gDepartTime: '3 PM',
    gArriveTime: '6 PM',
    rDepartTime: '4 PM',
    rArriveTime: '11 PM',
    originCityCode: 'PNQ',
    destinationCityCode: 'DEL'
  },
  {
    price: 8000,
    originCity: 'Pune',
    destinationCity: 'Delhi',
    departDate: '20/09/2017',
    returnDate: '21/09/2017',

    gFlightNumber: 'AI-204',
    rFlightNumber: 'AI-205',
    gDepartTime: '1 PM',
    gArriveTime: '3 PM',
    rDepartTime: '5 PM',
    rArriveTime: '8 PM',
    originCityCode: 'PNQ',
    destinationCityCode: 'DEL'
  },
  {
    price: 9000,
    originCity: 'Pune',
    destinationCity: 'Delhi',
    departDate: '20/09/2017',
    returnDate: '21/09/2017',

    gFlightNumber: 'AI-206',
    rFlightNumber: 'AI-207',
    gDepartTime: '1 PM',
    gArriveTime: '5 PM',
    rDepartTime: '5 PM',
    rArriveTime: '10 PM',
    originCityCode: 'PNQ',
    destinationCityCode: 'DEL'
  }
];

export { oneWayJson, twoWayJson };
