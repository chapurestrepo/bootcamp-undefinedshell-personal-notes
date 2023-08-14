const transactions = [
  {
    id: 123,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -30,
    category: "eating_out",
    time: "2018-03-12T12:34:00Z",
  },
  {
    id: 124,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -50,
    category: "eating_out",
    time: "2018-03-12T11:34:00Z",
  },
  {
    id: 127,
    sourceAccount: "my_account",
    targetAccount: "restaurant",
    amount: -100,
    category: "eating_out",
    time: "2019-03-23T11:51:00Z",
  },
  {
    id: 125,
    sourceAccount: "my_work",
    targetAccount: "my_account",
    amount: 1000,
    category: "salary",
    time: "2019-02-12T12:34:00Z",
  },
  {
    id: 126,
    sourceAccount: "my_work",
    targetAccount: "my_account",
    amount: 1100,
    category: "salary",
    time: "2019-05-12T12:34:00Z",
  },
  {
    id: 129,
    sourceAccount: "my_account",
    targetAccount: "my_work",
    amount: -100,
    category: "salary",
    time: "2019-05-12T12:35:00Z",
  },
  {
    id: 128,
    sourceAccount: "my_account",
    targetAccount: "supermarket",
    amount: -10,
    category: "groceries",
    time: "2019-01-23T12:51:00Z",
  },
];

//  console.log(transactions)

const sumAmount = (totalBalance, transaction) => {
  return totalBalance + transaction.amount;
};

//  console.log(transactions.reduce(sumAmount, 0))

// Solo entrega resultados de una categoría
const filterByCategory = ({ category }) => {
  return (transaction) => {
    return transaction.category === category;
  };
};

//console.log( transactions.filter(filterByCategory({category: "salary"})));

const filterbyTime = ({ startTime, endTime }) => {
  const startTimeValue = new Date(startTime).getTime();
  //   al endTime se le puede sumar 23 horas para que tome todo el día
  const endTimeValue = new Date(endTime).getTime();

  return (transaction) => {
    const transactionTime = new Date(transaction.time).getTime();
    return transactionTime >= startTimeValue && transactionTime <= endTimeValue;
  };
};

// console.log(transactions.filter(filterbyTime({startTime: "2018-02-12T12:34:00Z", endTime: "2018-05-12T12:34:00Z"})));


// unir todos los filtros y el redux
const getBalanceByCatAndRangeTyme = (
  transactions,
  category,
  startTime,
  endTime
) => transactions
.filter(filterByCategory({ category }))
.filter(filterbyTime({startTime, endTime}))
.reduce(sumAmount, 0)
;

console.log(getBalanceByCatAndRangeTyme(transactions, 'eating_out', '2019-01-01', '2019-12-31'));