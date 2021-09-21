import Expense from './Components/Expense';

function App() {
  const expenses = [
    {
      // expDate: new Date(2021, 3, 18),
      expDate: 'march-02-2000',
      title: 'car insurance',
      amount: 19999,
    },
    {
      expDate: 'march-02-2000',
      title: 'mobile recharge',
      amount: 999,
    },
    {
      expDate: 'march-02-2000',
      title: 'electricity bill',
      amount: 599,
    },
    {
      expDate: 'march-02-2000',
      title: 'water bill',
      amount: 2999,
    },
  ];
  return (
    <div>
      <Expense expenseData={expenses}></Expense>
    </div>
  );
}

export default App;
