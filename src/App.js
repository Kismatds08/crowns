import HomePage from "./pages/homepage/homepage.component";
import {Switch, Route} from 'react-router-dom'
import Header from "./components/header/header.component";

import './App.scss'
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sing-up/sign-in-and-sign-up.component";


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;


