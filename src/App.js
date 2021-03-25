import './App.css';
import Main from './component/Main.js';
import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>

      </Provider>

    </div>
  );
}

export default App;
