import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import store from './redux/store';

const App=()=> {
  return ( 
    <Provider store={store}>
        <Register />
    </Provider>
  );
}

export default App;
