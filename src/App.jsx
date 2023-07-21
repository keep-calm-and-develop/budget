import { Provider } from 'react-redux';
import store from './store/mainStore';

import './App.css';
import MainApp from './MainApp';

function App() {
    return (
        <Provider store={store}>
            <MainApp />
        </Provider>
    );
}

export default App;
