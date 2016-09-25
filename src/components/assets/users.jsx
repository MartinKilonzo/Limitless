let getRandomDate = () => {
  return new Date(2016, Math.round(Math.random() * 12), 1 + Math.round(Math.random() * 31))
};
let users = [
  {
    firstName: 'Katherine',
    lastName: 'Carter',
    department: 'operations',
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentType: 0,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Kathy Harper',
            amount: 64
          }, {
            date: getRandomDate(),
            recipient: 'Brenda Myers',
            amount: 61
          }, {
            date: getRandomDate(),
            recipient: 'Mildred Myers',
            amount: 36
          }, {
            date: getRandomDate(),
            recipient: 'Stephen Powell',
            amount: 92
          }, {
            date: getRandomDate(),
            recipient: 'Theresa Williams',
            amount: 95
          }, {
            date: getRandomDate(),
            recipient: 'Anne Fuller',
            amount: 69
          }
        ],
        balance: 417,
        limit: 964 - 800
      }, {
        paymentType: 1,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Teresa Reed',
            amount: 11
          }, {
            date: getRandomDate(),
            recipient: 'Carolyn Austin',
            amount: 41
          }, {
            date: getRandomDate(),
            recipient: 'Dorothy Price',
            amount: 44
          }, {
            date: getRandomDate(),
            recipient: 'Bruce Cook',
            amount: 23
          }
        ],
        balance: 536,
        limit: 1492 - 800
      }
    ]
  }, {
    firstName: 'Julie',
    lastName: 'Walker',
    department: 'operations',
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentType: 0,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'John Weaver',
            amount: 42
          }, {
            date: getRandomDate(),
            recipient: 'Beverly Little',
            amount: 90
          }
        ],
        balance: 132,
        limit: 564 - 800
      }, {
        paymentType: 1,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Jean Mendoza',
            amount: 48
          }, {
            date: getRandomDate(),
            recipient: 'Lori Dunn',
            amount: 56
          }
        ],
        balance: 236,
        limit: 882 - 800
      }
    ]
  }, {
    firstName: 'Charles',
    lastName: 'Allen',
    department: 'finance',
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentType: 0,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Paula Gomez',
            amount: 38
          }, {
            date: getRandomDate(),
            recipient: 'Julie Adams',
            amount: 33
          }, {
            date: getRandomDate(),
            recipient: 'Kathy Evans',
            amount: 30
          }, {
            date: getRandomDate(),
            recipient: 'Carolyn Hughes',
            amount: 21
          }, {
            date: getRandomDate(),
            recipient: 'Anthony Riley',
            amount: 29
          }, {
            date: getRandomDate(),
            recipient: 'Sara Perez',
            amount: 86
          }
        ],
        balance: 237,
        limit: 1384 - 800
      }, {
        paymentType: 1,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Christina Greene',
            amount: 74
          }, {
            date: getRandomDate(),
            recipient: 'Louise Cole',
            amount: 41
          }, {
            date: getRandomDate(),
            recipient: 'Jack Miller',
            amount: 91
          }
        ],
        balance: 443,
        limit: 966 - 800
      }
    ]
  }, {
    firstName: 'Bruce',
    lastName: 'Harvey',
    department: 'finance',
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentType: 0,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Elizabeth King',
            amount: 21
          }, {
            date: getRandomDate(),
            recipient: 'Beverly Long',
            amount: 30
          }, {
            date: getRandomDate(),
            recipient: 'Kimberly Lynch',
            amount: 62
          }, {
            date: getRandomDate(),
            recipient: 'Joe Campbell',
            amount: 37
          }, {
            date: getRandomDate(),
            recipient: 'David Adams',
            amount: 2
          }
        ],
        balance: 152,
        limit: 814 - 800
      }, {
        paymentType: 1,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Antonio Phillips',
            amount: 21
          }, {
            date: getRandomDate(),
            recipient: 'Dorothy Reyes',
            amount: 81
          }, {
            date: getRandomDate(),
            recipient: 'Clarence Williams',
            amount: 38
          }
        ],
        balance: 292,
        limit: 594 - 800
      }
    ]
  }, {
    firstName: 'Matthew',
    lastName: 'Myers',
    department: 'finance',
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentType: 0,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Roy Webb',
            amount: 10
          }, {
            date: getRandomDate(),
            recipient: 'Benjamin Reed',
            amount: 16
          }, {
            date: getRandomDate(),
            recipient: 'Kimberly Grant',
            amount: 19
          }, {
            date: getRandomDate(),
            recipient: 'Bobby Campbell',
            amount: 8
          }, {
            date: getRandomDate(),
            recipient: 'Bobby Lopez',
            amount: 95
          }
        ],
        balance: 148,
        limit: 1156 - 800
      }, {
        paymentType: 1,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Richard Mason',
            amount: 3
          }, {
            date: getRandomDate(),
            recipient: 'Kathy Williams',
            amount: 80
          }, {
            date: getRandomDate(),
            recipient: 'Brenda Rogers',
            amount: 98
          }, {
            date: getRandomDate(),
            recipient: 'Anthony Moreno',
            amount: 38
          }, {
            date: getRandomDate(),
            recipient: 'Matthew Ramos',
            amount: 57
          }
        ],
        balance: 424,
        limit: 1438 - 800
      }
    ]
  }, {
    firstName: 'Joseph',
    lastName: 'Reed',
    department: 'operations',
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentType: 0,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Anthony Greene',
            amount: 28
          }, {
            date: getRandomDate(),
            recipient: 'Harold Roberts',
            amount: 33
          }, {
            date: getRandomDate(),
            recipient: 'Andrea Rose',
            amount: 81
          }
        ],
        balance: 142,
        limit: 1274 - 800
      }, {
        paymentType: 1,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Clarence Harvey',
            amount: 76
          }, {
            date: getRandomDate(),
            recipient: 'Julie Perez',
            amount: 0
          }, {
            date: getRandomDate(),
            recipient: 'Phyllis George',
            amount: 88
          }, {
            date: getRandomDate(),
            recipient: 'Christine Dean',
            amount: 2
          }
        ],
        balance: 308,
        limit: 1476 - 800
      }
    ]
  }, {
    firstName: 'Sean',
    lastName: 'George',
    department: 'operations',
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentType: 0,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Deborah Edwards',
            amount: 54
          }, {
            date: getRandomDate(),
            recipient: 'Jeremy Burton',
            amount: 68
          }, {
            date: getRandomDate(),
            recipient: 'Christine Romero',
            amount: 49
          }, {
            date: getRandomDate(),
            recipient: 'Melissa Lee',
            amount: 18
          }
        ],
        balance: 189,
        limit: 918 - 800
      }, {
        paymentType: 1,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Harold Romero',
            amount: 29
          }, {
            date: getRandomDate(),
            recipient: 'Charles Grant',
            amount: 93
          }, {
            date: getRandomDate(),
            recipient: 'Theresa Hughes',
            amount: 5
          }, {
            date: getRandomDate(),
            recipient: 'Christine Romero',
            amount: 14
          }, {
            date: getRandomDate(),
            recipient: 'Anne Hughes',
            amount: 63
          }, {
            date: getRandomDate(),
            recipient: 'Brenda Powell',
            amount: 12
          }
        ],
        balance: 405,
        limit: 900 - 800
      }
    ]
  }, {
    firstName: 'Deborah',
    lastName: 'Chavez',
    department: 'finance',
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentType: 0,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Sean Brown',
            amount: 44
          }, {
            date: getRandomDate(),
            recipient: 'Julie George',
            amount: 35
          }, {
            date: getRandomDate(),
            recipient: 'Charles Woods',
            amount: 59
          }
        ],
        balance: 138,
        limit: 1206 - 800
      }, {
        paymentType: 1,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Katherine Brown',
            amount: 45
          }, {
            date: getRandomDate(),
            recipient: 'Jessica Stanley',
            amount: 22
          }, {
            date: getRandomDate(),
            recipient: 'Richard Little',
            amount: 58
          }, {
            date: getRandomDate(),
            recipient: 'David Banks',
            amount: 14
          }, {
            date: getRandomDate(),
            recipient: 'Rachel Stanley',
            amount: 72
          }, {
            date: getRandomDate(),
            recipient: 'Theresa Romero',
            amount: 97
          }
        ],
        balance: 446,
        limit: 1082 - 800
      }
    ]
  }, {
    firstName: 'Paul',
    lastName: 'Morrison',
    department: 'finance',
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentType: 0,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Stephen White',
            amount: 13
          }, {
            date: getRandomDate(),
            recipient: 'Clarence Myers',
            amount: 25
          }, {
            date: getRandomDate(),
            recipient: 'Paula Mccoy',
            amount: 61
          }, {
            date: getRandomDate(),
            recipient: 'Deborah Little',
            amount: 93
          }, {
            date: getRandomDate(),
            recipient: 'Nicholas Tucker',
            amount: 22
          }
        ],
        balance: 214,
        limit: 1298 - 800
      }, {
        paymentType: 1,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Randy Fisher',
            amount: 74
          }, {
            date: getRandomDate(),
            recipient: 'Billy Green',
            amount: 11
          }, {
            date: getRandomDate(),
            recipient: 'Christina George',
            amount: 50
          }, {
            date: getRandomDate(),
            recipient: 'David Campbell',
            amount: 19
          }, {
            date: getRandomDate(),
            recipient: 'Teresa King',
            amount: 2
          }, {
            date: getRandomDate(),
            recipient: 'Sandra Mendoza',
            amount: 51
          }
        ],
        balance: 421,
        limit: 1692 - 800
      }
    ]
  }, {
    firstName: 'Craig',
    lastName: 'Austin',
    department: 'finance',
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentType: 0,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Fred Brown',
            amount: 57
          }, {
            date: getRandomDate(),
            recipient: 'Jeremy Myers',
            amount: 43
          }
        ],
        balance: 100,
        limit: 790 - 800
      }, {
        paymentType: 1,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Harold Ford',
            amount: 87
          }, {
            date: getRandomDate(),
            recipient: 'David Myers',
            amount: 29
          }, {
            date: getRandomDate(),
            recipient: 'Antonio Lopez',
            amount: 62
          }, {
            date: getRandomDate(),
            recipient: 'Bruce George',
            amount: 95
          }, {
            date: getRandomDate(),
            recipient: 'Randy Lopez',
            amount: 16
          }, {
            date: getRandomDate(),
            recipient: 'Michael Walker',
            amount: 11
          }
        ],
        balance: 400,
        limit: 1280 - 800
      }
    ]
  }, {
    firstName: 'Dorothy',
    lastName: 'Barnes',
    department: 'marketing',
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentType: 0,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Michael Harper',
            amount: 29
          }, {
            date: getRandomDate(),
            recipient: 'Kathy Walker',
            amount: 65
          }, {
            date: getRandomDate(),
            recipient: 'Kimberly King',
            amount: 39
          }, {
            date: getRandomDate(),
            recipient: 'Patricia Campbell',
            amount: 77
          }, {
            date: getRandomDate(),
            recipient: 'Richard James',
            amount: 50
          }
        ],
        balance: 260,
        limit: 1130 - 800
      }, {
        paymentType: 1,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Heather Weaver',
            amount: 11
          }, {
            date: getRandomDate(),
            recipient: 'Dorothy Mccoy',
            amount: 50
          }, {
            date: getRandomDate(),
            recipient: 'Dorothy Rose',
            amount: 26
          }, {
            date: getRandomDate(),
            recipient: 'Patricia Gomez',
            amount: 71
          }, {
            date: getRandomDate(),
            recipient: 'Harold Moreno',
            amount: 17
          }
        ],
        balance: 435,
        limit: 1000 - 800
      }
    ]
  }, {
    firstName: 'Phyllis',
    lastName: 'Phillips',
    department: 'finance',
    hasAdminAccess: false,
    paymentMethods: [
      {
        paymentType: 0,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Donald Cook',
            amount: 32
          }, {
            date: getRandomDate(),
            recipient: 'Dorothy Harper',
            amount: 84
          }, {
            date: getRandomDate(),
            recipient: 'Anthony Harvey',
            amount: 69
          }, {
            date: getRandomDate(),
            recipient: 'Roy Gray',
            amount: 11
          }, {
            date: getRandomDate(),
            recipient: 'Albert Roberts',
            amount: 38
          }
        ],
        balance: 234,
        limit: 708 - 800
      }, {
        paymentType: 1,
        transactionHistory: [
          {
            date: getRandomDate(),
            recipient: 'Katherine Roberts',
            amount: 59
          }, {
            date: getRandomDate(),
            recipient: 'Theresa Cole',
            amount: 34
          }, {
            date: getRandomDate(),
            recipient: 'Louise Fung',
            amount: 79
          }, {
            date: getRandomDate(),
            recipient: 'Rachel Gomez',
            amount: 34
          }
        ],
        balance: 440,
        limit: 1450 - 800
      }
    ]
  }
];

module.exports = users;
