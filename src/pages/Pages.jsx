import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import {Home} from './Home/Home';
import {Games} from './Games/Games';
import {Portfolio} from './Portfolio/Portfolio';
import {NotFound} from './NotFound/NotFound';

export function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}