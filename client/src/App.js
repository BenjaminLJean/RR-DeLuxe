import './App.css';

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './screens/Login/Login';
import { useState } from 'react'
import { loginUser } from './services/auth';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
  }

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
