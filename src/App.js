
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import './App.scss';
import Banner from './components/Banner';
import Footer from './components/Footer';
import LoginScreen from "./components/LoginScreen";
import Nav from './components/Nav';
import ProfileScreen from './components/ProfileScreen';
import Row from './components/Row';
import Video from "./components/Video";
import requests from './config/request';
import {
  login
  // , logout 
} from './redux/actions/index';

function App(login, logout) {

  // useEffect(() => {
  //   // we listen if the state authentificator have changed
  //   const unsubscribe = auth.onAuthStateChanged(userAuth =>{
  //     if(userAuth){
  //       //logged in
  //       console.log(userAuth)
  //       login()
  //     }else {
  //       //log out
  //       // logout()
  //     }
  //   })
  //   return unsubscribe;
  // }, [])
  return (
    <div className="App">
      <Router>
        <Switch>    
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
          <Route path='/login'>
            {/* <Login /> */}
            <LoginScreen />
          </Route>
          <Route path='/profile'>
            <ProfileScreen />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
      </Switch>
     </Router>
    </div> 
  );
}
const mapStateToProps = (state) => {
  return {
      user: state.userState.user
  }
}
// Login 3 : sign in, callback another function 'signInAPI' ( action creator)
const mapDispatchToProps = (dispatch) => {
  return {
      login : () =>  dispatch(login(payload)),
    //   logout : () => {
    //     dispatch(logout())
    // }
  }
}
export default connect(mapStateToProps,mapDispatchToProps )(App)

