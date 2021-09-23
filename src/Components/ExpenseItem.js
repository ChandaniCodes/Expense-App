import './ExpenseItem.css';
function ExpenseItem(props) {
  //   const month = props.expDate.toLocaleString('en-US', { month: 'long' });
  //   const day = props.expDate.toLocaleString('en-US', { day: '2-digit' });
  //   const year = props.expDate.getFullYear();

  return (
    <div>
      <div className="container ">
        <div className="row p-2 expense-list">
          <div className="col-sm-2  expense-list__date">
            <div className="expense-list__date_control p-1">
              {/* <div className="expense-list__month">{props.expenseItem.expDate}</div> */}
              <div className="expense-list__month">March</div>
              <div className="expense-list__day">02</div>
              <div className="expense-list__year">2000</div>
            </div>
          </div>
          <div className="col-sm-7 expense-list__heading">
            <h3>{props.expenseItem.title}</h3>
          </div>
          <div className="col-sm-3 expense-list__prize text-center">
            <button
              type="button"
              className="btn btn-light mt-4 expense-header__button expense-list__prize-btn"
            >
              Rs. {props.expenseItem.amount}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
