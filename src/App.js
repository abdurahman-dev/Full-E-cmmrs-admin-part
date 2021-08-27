import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Category from "./Components/Category";
import Orders from "./Components/Orders";
import Product from "./Components/Products";
import PrivateRoute from "./HOC/PrivateRoute";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import SignUP from "./Pages/SignUp/SignUP";
import { getAllCategory, isLoggedIn,initialData } from "./Redux/Actions";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isLoggedIn());
    }
    dispatch(getAllCategory());
    dispatch(initialData());
  }, []);
  return (
    <>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/products" component={Product} />
        <PrivateRoute path="/orders" component={Orders} />
        <PrivateRoute path="/category" component={Category} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUP} />
      </Switch>
    </>
  );
}

export default App;
