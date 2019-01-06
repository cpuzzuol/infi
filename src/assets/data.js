const categories = [
  'primary',
  'secondary',
  'housing',
  'gas',
  'gifts',
]

const transactions = [
  {
    date: '2019-01-06',
    transactions: [
      {
        id: 1,
        type: 'inflow',
        category: categories[0],
        amount: '4.02',
        description: 'UM pay'
      },
      {
        id: 2,
        type: 'inflow',
        category: categories[1],
        amount: '14.10',
        description: 'Rent check'
      },
      {
        id: 3,
        type: 'outflow',
        category: categories[2],
        amount: '5.00',
        description: 'Mortgage'
      },
      {
        id: 4,
        type: 'inflow',
        category: categories[4],
        amount: '9.30',
        description: 'Gift card'
      },
      {
        id: 5,
        type: 'outflow',
        category: categories[3],
        amount: '6.70',
        description: 'BP'
      },
      {
        id: 11,
        type: 'inflow',
        category: categories[0],
        amount: '144.02',
        description: 'Iggs pay'
      },
    ]
  },
  {
    date: '2019-01-07',
    transactions: [
      {
        id: 6,
        type: 'inflow',
        category: categories[0],
        amount: '5.02',
        description: 'UM pay'
      },
      {
        id: 7,
        type: 'inflow',
        category: categories[1],
        amount: '16.10',
        description: 'Rent check'
      },
      {
        id: 8,
        type: 'outflow',
        category: categories[2],
        amount: '57.00',
        description: 'Mortgage'
      },
      {
        id: 9,
        type: 'inflow',
        category: categories[3],
        amount: '98.30',
        description: 'Gift card'
      },
      {
        id: 10,
        type: 'outflow',
        category: categories[4],
        amount: '69.70',
        description: 'BP'
      }
    ]
  }
]

export { transactions, categories }
