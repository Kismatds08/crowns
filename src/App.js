import React from 'react'
import HomePage from "./pages/homepage/homepage.component";
import {Switch, Route} from 'react-router-dom'
import Header from "./components/header/header.component";

import './App.scss'
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sing-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  componentDidMount(){
    //whenever an authentication state gets changed we are going to get those authenticaiton
    //details ad store it in our app
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

      //Signup method
      if(user){
        const userRef = await createUserProfileDocument (user)

        userRef.onSnapshot( snapshot => {
          this.setState({
            currentUser: {
              id : snapshot.id,
              ...snapshot.data()
            }
          })
        })
        console.log(this.state)
      }

      //For Google Sign In method
      this.setState({currentUser: user})
      console.log(this.state)
    })
  }
  
  componentWillUnmount(){
      this.unsubscribeFromAuth()
  }

  render(){
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
    }

export default App;

// function App() {
//   return (
//     <div>
//       <Header />
//       <Switch>
//         <Route exact path='/' component={HomePage} />
//         <Route exact path='/shop' component={ShopPage} />
//         <Route exact path='/signin' component={SignInAndSignUpPage} />
//       </Switch>
//     </div>
//   );
// }

// export default App;


