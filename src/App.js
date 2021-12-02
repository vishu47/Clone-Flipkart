import {React,useEffect} from 'react'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
import Home from './containers/Home//index'
import Login from './containers/Login/index'
import Signup from './containers/Signup/index'
import OrderPage from './containers/Home/pages/orders'
import ProductPage from './containers/Home/pages/products'
import CategoryPage from './containers/Home/pages/category'
import './App.css';
import PrivateRoute from './components/HOC/privateRoutes'
import {isUserLoggedIn} from './action/auth.actions'
import {useSelector, useDispatch} from 'react-redux';

function App() {

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(!auth.authenticate){
        dispatch(isUserLoggedIn())
    }
    if(auth.token == null){
      return <Redirect to={`/`} />
      
    }
}, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Home}  />
          <PrivateRoute path="/products" component={ProductPage}  />
          <PrivateRoute path="/orders" component={OrderPage}  />
          <PrivateRoute path="/category" component={CategoryPage}  />
          <Route exact path="/login" component={Login}  />
          <Route exact path="/signup" component={Signup}  />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
