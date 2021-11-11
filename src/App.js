import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Shareable/Header/Header';
import Footer from './Shareable/Footer/Footer';
import Home from './Pages/Home/Home';
import Explore from './Pages/Explore/Explore';
import Purchases from './Pages/Purchases/Purchases';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>

        <Route path="/home">
        <Home></Home>
        </Route>
        
        <Route path="/explore">
          <Explore></Explore>
        </Route>
        
        <PrivateRoute path="/purchase/:Id">
        <Purchases></Purchases>
        </PrivateRoute>
        
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/registerd">
          <Register></Register>

        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    
    </div>
  );
}

export default App;
