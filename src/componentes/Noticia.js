import React from 'react'

const Noticia = (props) => {
  var {urlToImage, url, title, description, source, author } = props.noticia;
  if(!urlToImage){
    this.urlToImage = "http://arroceriaticktack.comprasporespaña.com/img/nodisponible.png"
  }
  return(
    <div className="col-md-4 mt-4">
      <div className="card">
        <img className="card-img-top" src={urlToImage} alt={title} />
        <span className="card-title">{source.name}</span>
        <div className="car-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <span className="card-title">Autor: {author}</span>
          <br />
          <a href={url} className="btn btn-primary d-flex justify-content-center m-3" target="_blank" rel="noopener noreferrer" >Leer Más</a>

        </div>
      </div>
      <br />

    </div>
  )
}

export default Noticia;