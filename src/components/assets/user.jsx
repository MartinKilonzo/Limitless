let getRandomDate = () => {
  return new Date(2016, Math.round(Math.random() * 12), 1 + Math.round(Math.random() * 31))
};
let departments = ['marketing', 'operations', 'finance'];
let user = [
  {
    firstName: 'Brenda',
    lastName: 'Hunt',
    department: departments[Math.floor(Math.random() * 3)],
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentMethod: Math.floor(Math.random() * 5),
        limit: 1000,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Jean',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Brenda',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Phyllis',
            amount: 20 + Math.random() * (300 - 20)
          }
        ]
      }
    ]
  }, {
    firstName: 'Teresa',
    lastName: 'Johnson',
    department: departments[Math.floor(Math.random() * 3)],
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentMethod: Math.floor(Math.random() * 5),
        limit: 1200,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Kathy',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Albert',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Lawrence',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Ryan',
            amount: 20 + Math.random() * (300 - 20)
          }
        ]
      }
    ]
  }, {
    firstName: 'Christina',
    lastName: 'Li',
    department: departments[Math.floor(Math.random() * 3)],
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentMethod: Math.floor(Math.random() * 5),
        limit: Math.round(Math.random() * 20) * 100,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Phyllis',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Phyllis',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Kimberly',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Michelle',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Dorothy',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Donald',
            amount: 20 + Math.random() * (300 - 20)
          }
        ]
      }
    ]
  }, {
    firstName: 'Julie',
    lastName: 'Carr',
    department: departments[Math.floor(Math.random() * 3)],
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentMethod: Math.floor(Math.random() * 5),
        limit: Math.round(Math.random() * 20) * 100,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Julie',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Anthony',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Andrea',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Phyllis',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Anthony',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Brenda',
            amount: 20 + Math.random() * (300 - 20)
          }
        ]
      }
    ]
  }, {
    firstName: 'Bobby',
    lastName: 'Lee',
    department: departments[Math.floor(Math.random() * 3)],
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentMethod: Math.floor(Math.random() * 5),
        limit: Math.round(Math.random() * 20) * 100,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Nicholas',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Donald',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Martin',
            amount: 20 + Math.random() * (300 - 20)
          }
        ]
      }
    ]
  }, {
    firstName: 'John',
    lastName: 'Garza',
    department: departments[Math.floor(Math.random() * 3)],
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentMethod: Math.floor(Math.random() * 5),
        limit: Math.round(Math.random() * 20) * 100,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Heather',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Christina',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Christopher',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Kathy',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Sean',
            amount: 20 + Math.random() * (300 - 20)
          }
        ]
      }
    ]
  }, {
    firstName: 'Sean',
    lastName: 'Sullivan',
    department: departments[Math.floor(Math.random() * 3)],
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentMethod: Math.floor(Math.random() * 5),
        limit: Math.round(Math.random() * 20) * 100,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Antonio',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Christina',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Lillian',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Phyllis',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Richard',
            amount: 20 + Math.random() * (300 - 20)
          }, {
            date: getRandomDate(),
            recipient: 'Norma',
            amount: 20 + Math.random() * (300 - 20)
          }
        ]
      }
    ]
  }
]

module.exports = user;
