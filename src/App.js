import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/index';

function App() {
  return (
    <Routes>
          <Route path="/" element={<Layout />}>
              
      </Route>
    </Routes>
  );
}

export default App;
