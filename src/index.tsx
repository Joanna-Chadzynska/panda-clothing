import { persistor, store } from 'app/store';
import 'assets/styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
