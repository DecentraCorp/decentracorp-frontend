import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from 'theme/globalStyles';

//This is for demo purposes only
import { Provider as MultiauthProvider} from '@ceramicstudio/multiauth';
import { Provider as StateProvider } from 'jotai';
import { connectors } from '../src/lib/ceramic/auth';

ReactDOM.render(
  <React.StrictMode>
    {/* <MultiauthProvider providers={[{ key: 'ethereum', connectors}]}> */}
      <StateProvider>
        <GlobalStyle />
        <App />
      </StateProvider>
    {/* </MultiauthProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
