import './ExpenseItem.css';
function ExpenseItem(props) {
  //   const month = props.expDate.toLocaleString('en-US', { month: 'long' });
  //   const day = props.expDate.toLocaleString('en-US', { day: '2-digit' });
  //   const year = props.expDate.getFullYear();

  return (
    <div>
      <div className="expense-list p-2 d-flex justify-content-start">
        <div className="expense-list__date p-1">
          {/* <div className="expense-list__month">{props.expenseItem.expDate}</div> */}
          <div className="expense-list__month">month</div>
          <div className="expense-list__day">day</div>
          <div className="expense-list__year">year</div>
        </div>
        {/* </div> */}
        <h3 className="expense-list__heading">{props.expenseItem.title}</h3>
        <div className="expense-list__prize">
          <button
            type="button"
            className="btn btn-light mt-4 expense-header__button expense-list__prize-btn"
          >
            Rs. {props.expenseItem.amount}
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
}
export default ExpenseItem;
