import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, useParams } from 'react-router-dom';

import { Header, Footer } from './pages/Navigation';
import HomePage from './pages/Homepage';
import Portfolio from './Portfolios/Portfolio';
import Portfolios from './Portfolios/Portfolios';

const client = new ApolloClient({
  uri: 'http://localhost:8888/wordpress/graphql/',
});


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      
        <div>
          <Header />

          <div className="content">
            routes:
            <Route exact path="/" component={HomePage} />
            <Route path="/portfolios" component={Portfolios} />
            <Route path="/portfolio/:slug" component={Portfolio} />
          </div>

        <Footer />

        </div>

      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
