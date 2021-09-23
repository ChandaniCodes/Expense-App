import React from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  return (
    <form>
      <div className="row mt-3">
        <div className="col-sm-6">
          <input
            type="text"
            class="form-control"
            placeholder="Enter item name here.."
          />
        </div>
        <div class="col-sm-6">
          <input
            type="number"
            class="form-control"
            placeholder="Enter Amount"
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-6">
          <input type="date" class="form-control" />
        </div>
        <div class="col-sm-6"></div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-6"></div>
        <div class="col-sm-6">
          <button type="submit" className="btn btn-light expense-form-btn">
            Cancel
          </button>
          &nbsp;&nbsp;
          <button type="submit" className="btn btn-light expense-form-btn">
            Add Expense
          </button>
          {/* <div className="row">
            <div className="col"></div>
            <div className="col"></div>
          </div> */}
        </div>
      </div>
    </form>
  );
}
export default ExpenseForm;
