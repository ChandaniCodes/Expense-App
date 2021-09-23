import './Expense.css';
import ExpenseItem from './ExpenseItem';
import ExpenseForm from './ExpenseForm/ExpenseForm';

function Expense(props) {
  return (
    <div>
      <div id="backgrnd">
        <div className="container">
          <div className="row">
            <div className="col-sm-2"> </div>
            <div className="col-sm-8">
              <div className="expense-header mt-4 p-3 text-center">
                <h1 className="expense-header__heading">Expense App</h1>
                <button
                  type="button"
                  className="btn btn-light mt-4 expense-header__button"
                >
                  Create Expense List
                </button>
                <ExpenseForm />
                <div className="mt-5">
                  <ExpenseItem expenseItem={props.expenseData[0]}></ExpenseItem>
                  <ExpenseItem expenseItem={props.expenseData[1]}></ExpenseItem>
                  <ExpenseItem expenseItem={props.expenseData[2]}></ExpenseItem>
                  <ExpenseItem expenseItem={props.expenseData[3]}></ExpenseItem>
                </div>
              </div>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expense;
