import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Details from "./Components/Details/Details";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Registration from "./Components/Login/Registration";
import NotFound from "./Components/NotFound/NotFound";
import Services from "./Components/Services/Services";
import Authprovider from "./Context/Authprovider";

function App() {
  return (
    <div className="App">
      <Authprovider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <PrivateRoute path="/details/:serviceId">
           <Details></Details>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
