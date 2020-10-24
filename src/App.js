import './App.css';
import Navbar from './components/Navbar'
import store from './store'
import { Provider } from 'react-redux';
import Sidenav from './components/Sidenav'
import Mainview from './components/Mainview'

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Navbar />
          <div className="body-container">
              <Sidenav />
              <Mainview />
          </div>
        </div>
    </Provider>
  );
}

export default App;
