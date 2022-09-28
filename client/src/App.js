import React from 'react';
// ApolloProvider is a React component that provides data to all of the other components. 
// ApolloCLient is a constructor function that helps initialize the connection to GraphQL API server. 
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


/* The entire JSX code is wrapped with ApolloProvider because we're passing the client variable 
in as the value for the client prop in the provider. Everything between the JSX tags will have access to the 
server's API data through the client that is set up. */ 
function App() {
  return (
  <ApolloProvider  client ={client}>
       <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  </ApolloProvider>
 
  );
}

export default App;
