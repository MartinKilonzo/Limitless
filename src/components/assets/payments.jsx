let payments = [
  {
    acctNumber: `${Math.round(Math.random() * 10000)} ${Math.round(Math.random() * 10000)} ${Math.round(Math.random() * 10000)} ${Math.round(Math.random() * 10000)}`,
    acctHolder: 'Jerry Donovan',
    type: 'credit',
    expiration: new Date(Math.round(2016 + Math.random() * (2023-2016)), Math.round(Math.random() * 12)),
    limit: 2000,
    history: []
  },{
    acctNumber: `${Math.round(Math.random() * 10000)} ${Math.round(Math.random() * 10000)} ${Math.round(Math.random() * 10000)} ${Math.round(Math.random() * 10000)}`,
    acctHolder: 'Jerry Donovan',
    type: 'credit',
    expiration: new Date(Math.round(2016 + Math.random() * (2023-2016)), Math.round(Math.random() * 12)),
    limit: 300,
    history: []
  },{
    acctNumber: `${Math.round(Math.random() * 10000)} ${Math.round(Math.random() * 10000)} ${Math.round(Math.random() * 10000)} ${Math.round(Math.random() * 10000)}`,
    acctHolder: 'Jerry Donovan',
    type: 'credit',
    expiration: new Date(Math.round(2016 + Math.random() * (2023-2016)), Math.round(Math.random() * 12)),
    limit: 2000,
    history: []
  },
];

export default payments;
