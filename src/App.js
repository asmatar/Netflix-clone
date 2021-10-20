
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Banner from './components/Banner';
import Footer from './components/Footer';
import LoginScreen from "./components/LoginScreen";
import Nav from './components/Nav';
import ProfileScreen from './components/ProfileScreen';
import Row from './components/Row';
import Video from "./components/Video";
import requests from './config/request';
import { getUserAuth, login } from './redux/actions/index';
// import {auth} from './firebase'
function App({getUserAuth, userStore}
  // login, logout, 
  // getUserAuth
  ) {
  const user = userStore
    console.log('donnée du user recuperer du store',userStore);

  useEffect(() => {
    getUserAuth ()
    // // we listen if the state authentificator have changed
    // const unsubscribe = auth.onAuthStateChanged(userAuth =>{
    //   if(userAuth){
    //     //logged in
    //     // typeof(log)
    //     login()
    //   }else {
    //     // log out
    //     // logout()
    //   }
    // })
    // return unsubscribe;
  }, [])
  return (
    <div className="App">
      <Router>
        <Switch> 
          {
            !user ? (    <LoginScreen /> ) : ( <>
          <Route exact path='/'>  
             <Nav />
            <Banner />
            {/*  on doit passer en props le titre de la catégorie et l'URL, les URL sont présentes dans la doc de l'API*/}
            <Row title='Programmes originaux Netflix' fetchUrl={requests.fetchNetflixOriginals} isPoster ={true}/>
            <Row title='Tendance actuelle' fetchUrl={requests.fetchTrending}/>
            <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
            <Row title="Films d'action" fetchUrl={requests.fetchActionMovies} />
            <Row title="Films d'horreur" fetchUrl={requests.fetchTrending} />
            <Row title="Comédies" fetchUrl={requests.fetchTopRated} />
            <Row title="Documentaires" fetchUrl={requests.fetchActionMovies} />
            <Footer  />  
        </Route>
          <Route path='/video/:id'>
            <Video />
          </Route>
          <Route path='/profile'>
            <ProfileScreen />
          </Route>
              </>
              )
          }
          <Route path='/login'>
            <LoginScreen />
          </Route>
      </Switch>
     </Router>
    </div> 
  );
}
const mapStateToProps = (state) => {
  return {
      userStore: state.userState.user
  }
}
// Login 3 : sign in, callback another function 'signInAPI' ( action creator)
const mapDispatchToProps = (dispatch) => {
  console.log('1 je suis dans dispatch de get user auth')
  return {
      log : (payload) =>  dispatch(login(payload)),
      getUserAuth: () => dispatch(getUserAuth())
    }
}
export default connect(mapStateToProps,mapDispatchToProps )(App)

