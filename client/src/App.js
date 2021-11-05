import './App.css';

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './screens/Login/Login';
import { useState } from 'react'

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (formData) => {

  }

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
