import React from 'react'
import HomePage from "./pages/homepage/homepage.component";
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from "./components/header/header.component";

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions';

import './App.scss'
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sing-up/sign-in-and-sign-up.component";


class App extends React.Component{
 
  componentDidMount(){
    const {setCurrentUser} = this.props
    //whenever an authentication state gets changed we are going to get those authenticaiton
    //details ad store it in our app
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

      //Signup method
      if(user){
        const userRef = await createUserProfileDocument (user)

        userRef.onSnapshot( snapshot => {
          //Calling the function
          setCurrentUser(
            //User Parameter
            {
              id : snapshot.id,
              ...snapshot.data()
            }
          )
        })
      }
    })
  }
  //unmounting the component state
  componentWillUnmount(){
      this.unsubscribeFromAuth()
  }

  render(){
    const {currentUser} = this.props
    return (
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/shop' component={ShopPage} />
              <Route 
                exact 
                path='/signin' 
                render = {
                  () => currentUser ?
                  (<Redirect to='/'/>)
                  :
                  (<SignInAndSignUpPage/>)
              }
              />
            </Switch>
          </div>
        ); 
      }
    }
//Note"
//1. Connect is HOC (High Order Component)
//2 It takes two parameters 
    //2.1 mapStateToProps => Subscribe the Data from the store 
    //2.2 mapDispatchToProps => Dispatching Actions and Payload[Data] to the Reducer 
    //    2.2.1 => Takes object as parameter with multiple actions can be dispatched
    //          => user => dispatch(setCurrentUser(user))


    const mapDispatchToProps = dispatch =>(
      { //Key       : Call Back Function -> user +> dispatch(setCurrentUser(user))
       setCurrentUser : user => dispatch(setCurrentUser(user))
      }
    )

    const mapStateToProps = ({user}) => (
      {
        currentUser: user.currentUser
      }
    )
export default connect(mapStateToProps,mapDispatchToProps)(App);



















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


