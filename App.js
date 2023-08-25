
import './App.css';
import MyContext from './Context/MyContext';
import BalanceExpense from './Components/BalanceExpense';
import NewTransaction from './Components/NewTransaction';
import 'bootstrap/dist/css/bootstrap.min.css';
import TransactionHistory from './Components/TransactionHistory';
import ExpenseChart from './Components/ShowChart'
function App() {
  return (
    <div className="App">
      <MyContext>
        <div className="left">
          <BalanceExpense/>
          <NewTransaction/>
        </div>
        <div className="right">
          <TransactionHistory/>
        </div>
        <div>
          <ExpenseChart/>
        </div>
      </MyContext>
    </div>
  );
}

export default App;
