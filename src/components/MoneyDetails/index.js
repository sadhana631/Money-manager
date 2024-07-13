import './index.css'

const MoneyDetails = props => {
  const {balanceAccount, incomeAccount, expensesAccount}

  return (
    <div className="money-details-container">
     <div className="balance-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image-image"
        alt="balance"
        className="details-img"
      />  
     <div>
       <p className="details-text">Your Balance</p>
       <p className="details-money" date-testid="balanceAmount"
         Rs {balanceAmount}
       <p>
      </div>
     </div>    
    <div className="income-container">
      <img
       src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
       className="details-img"
      /> 
    <div>
      <p className="details-text">Your Income</p>
      <p className="details-money" data-testid="incomeAmount">
        Rs {incomeAmount}
      </p> 
    </div>  
   </div> 
  <div className="expenses-container">
   <img
    src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
    alt="expenses"
    className="deatils-img"
   /> 
  <div>
    <p className="details-item">Your Expenses</p>
    <p className="deatils-money" data-testid="expensesAmount">
     Rs {expensesAmount}
    </p> 
  </div>
  </div>
  </div>
  )
}  

export default MoneyDetails



