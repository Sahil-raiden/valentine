import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Yes from './components/Yes';
import RootLayout from './components/RootLayout';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <RootLayout>
        <Route exact path="/valentine" component={Home} />
        <Route path="/valentine/yes" component={Yes} />
      </RootLayout>
    </Router>
  );
}

export default App;
