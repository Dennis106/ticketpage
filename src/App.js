import TicketList from './components/TicketList'
import { Provider } from 'react-redux';
import store from './services/store';
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <TicketList />
      </div>
    </Provider>
  );
}

export default App;
