// - React Imports
import React, { useState, useRef } from 'react';
import { Route,Switch, HashRouter} from 'react-router-dom'

// - Component Imports
import Bank from './pages/bank/bank'
import Dao from './pages/Dao/Dao';
import Homepage from './pages/homepage/homepage';
import Membership from './pages/membership/Membership';
import {NavBar} from '../src/components/NavBar/NavBar';
import {MobileNavBar} from '../src/components/MobileNavBar/MobileNavBar';
import FrontPage from 'pages/FrontPage/FrontPage';

//- Web3 Imports
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

//- Hooks Imports
import { useOnClickOutside } from 'lib/hooks/useOnClickOutside';
import { useGetWindowWidth } from 'lib/hooks/useGetWidth';

// Web3 Wallet
function getLibrary(provider: any): Web3Provider {
  console.log(
		'line 28',
	);
	const library = new Web3Provider(provider);
	library.pollingInterval = 12000;
	return library;
}

// - Apollo Client 
const client = new ApolloClient({
  uri: process.env.REACT_APP_SUBGRAPH_URL_1,
  cache: new InMemoryCache(),
});

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const node: any = useRef();
  const {width} = useGetWindowWidth();
    useOnClickOutside(node, () => setOpen(false));
  return (
    <HashRouter>
      { width && width > 1200 ?
        <NavBar/> :
        <div ref={node}>
          <MobileNavBar open={open} setOpen={setOpen}/>
        </div>
      }
        <Switch>
          <Route path="/welcome" component={FrontPage} />
          <Route exact path="/" component={FrontPage}>
          </Route>
          <Route path="/bank" component={Bank} />
          <Route path="/dao" component={Dao} />
          <Route path='/membership' component={Membership} />
        </Switch>
    </HashRouter>
  );
}
     
function wrappedApp() {
  return (
    <ApolloProvider client={client}>
      <Web3ReactProvider getLibrary={getLibrary}>
          <App />
      </Web3ReactProvider>
    </ApolloProvider>
  );
}

export default wrappedApp;
