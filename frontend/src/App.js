import './App.css';
import Sluggers from './components/Sluggers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import SluggerSide from './components/SluggerSide';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Sluggers />} />
          <Route exact path="/book/:id" element={<SluggerSide />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
