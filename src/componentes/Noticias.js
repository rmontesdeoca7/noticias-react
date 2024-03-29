import React, { Component } from 'react'

// importar el componente de Noticia
import Noticia from './Noticia';

class Noticias extends Component {
  render() {
    return(
      <div className="row">
        {this.props.noticias.map(noticia => (
          <Noticia 
            key = {noticia.url}
            noticia = {noticia}
          />

        ))}

      </div>
    )
  }
}

export default Noticias;