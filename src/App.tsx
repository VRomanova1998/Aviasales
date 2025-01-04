import './App.css';
import logo from './files/Logo.png';
import { TicketsContainer } from './tickets-container/TicketsContainer';
import { TransferAmountFilter } from './transfer-amount-filter/TransferAmountFilter';

function App() {
  return (
    <div>
      <img src={logo} className="logo" />
      <div className="section-container">
        <TransferAmountFilter />
        <TicketsContainer />
      </div>
    </div>
  );
}

export default App;
