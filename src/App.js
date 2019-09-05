import React, { Component } from 'react';

// componentes propios
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';

class App extends Component {

  state = {
    noticias : []
  }

  componentDidMount() {
    this.consultarNoticias();
  }
  
  consultarNoticias = () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=63d551b6944e439888e91bf83ccda75f';
  
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias => {
        this.setState({
          noticias: noticias.articles
        })
      })
  }


  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <Noticias
            noticias = {this.state.noticias}
          />
        </div>
        
      </React.Fragment>
    );
  }
}

export default App;
