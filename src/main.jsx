import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
// import Provider from 'react-redux';
// import rootReducer from './reducers/index';

// const store = configureStore({
//   reducer: rootReducer
// })
ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </Provider>
)
