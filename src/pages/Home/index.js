import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

/**
 * This component represents the home page
 */
class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
        this.loadMovies = this.loadMovies.bind(this);
    }

    componentDidMount(){
        this.loadMovies();
    }

    loadMovies(){
        let url = "https://sujeitoprogramador.com/r-api/?api=filmes/";
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            this.setState({movies: data});
        });
    }

    render(){
        return(
            <div className="container">
                <div className="movie-list">
                    {this.state.movies.map(movie => {
                        return(
                            <article key={movie.id} className="movie">
                                <strong>{movie.nome}</strong>
                                <img src={movie.foto} alt="movie cover"/>
                                <Link to="/">Acessar</Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Home;