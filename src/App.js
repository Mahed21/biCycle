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
import Review from './Review/Review';
import DashBoard from './DashBoard/DashBoard';
import Pay from './Pages/Pay/Pay';
import MyOrder from './Pages/MyOrder/MyOrder';

import ClientOrder from './Pages/ClientOrder/ClientOrder';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';

import ManageOrder from './Pages/Admin/ManageOrder/ManageOrder';
import AddProducts from './Pages/Admin/AddProduct/AddProducts';
import DisplayClientOrder from './Pages/Admin/DisplayClientOrder/DisplayClientOrder';
import ManageProduct from './Pages/Admin/ManageProduct/ManageProduct';
import Not from './Pages/Not/Not';
import AdminRoute from './Pages/AdminRoute/AdminRoute';

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

        <Route path="/review">
        <Review></Review>
        </Route>

        <PrivateRoute path="/dashboard">
        <DashBoard></DashBoard>
        </PrivateRoute>

        <Route path="/pay">
        <Pay></Pay>
        </Route>

        <Route path="/myorder">
        <MyOrder></MyOrder>
        </Route>

        

        <Route path="/pay">
        <Pay></Pay>
        </Route>
        <Route path="client">
          <ClientOrder></ClientOrder>
        </Route>

        <AdminRoute path="/admin">
          <MakeAdmin></MakeAdmin>
        </AdminRoute>

        <Route path="/manageorder">
          <ManageOrder></ManageOrder>
        </Route>

        <Route path="/manageproduct">
          <ManageProduct></ManageProduct>
        </Route>

        <Route path="/addproduct">
          <AddProducts></AddProducts>
        </Route>

        <Route path="/displayclient">
          <DisplayClientOrder></DisplayClientOrder>
        </Route>

        <rout path="*">
          <Not></Not>

        </rout>
        
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    
    </div>
  );
}

export default App;
