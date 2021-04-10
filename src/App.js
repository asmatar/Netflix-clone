import './App.scss';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './config/request';
function App() {
  return (
    
    <div className="App">
      <Nav /> 
      <Banner />
      {/*  on doit passer en props le titre de la catégorie et l'URL */}
      <Row title='Programmes originaux Netflix' fetchUrl={requests.fetchNetflixOriginals} isPoster ={true}/>
      <Row title='Tendance actuelle' fetchUrl={requests.fetchTrending}/>
      <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
      <Row title="Films d'action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Films d'horreur" fetchUrl={requests.fetchTrending} />
      <Row title="Comédies" fetchUrl={requests.fetchTopRated} />
      <Row title="Documentaires" fetchUrl={requests.fetchActionMovies} />

      {/* video */}

      {/* quick view */}
      
      {/* footer */}
      <Footer  />
    </div> 
  );
}

export default App;
