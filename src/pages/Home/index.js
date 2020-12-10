import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

/**
 * This component represents the home page
 */
class Home extends Component{

    /**
     * This is the component constructor
     * @param props is the object that
     * contains the properties delivered as parameter
     * to the component .
     * 
     * The constructor make a state object for storage
     * the component datas.
     * 
     * This constructor make aalso the bind in the 
     * component methods
     */
    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
        this.loadMovies = this.loadMovies.bind(this);
    }

    /**
     * This method is executed when the component
     * is mount and it call the loadMovies() method.
     */
    componentDidMount(){
        this.loadMovies();
    }

    /**
     * This method makes a requisition using fetch api
     * and stores the json in the component state.
     * 
     * The json returned contains a movie list and
     * each movie contais some informations.
     */
    loadMovies(){
        let url = "https://sujeitoprogramador.com/r-api/?api=filmes/";
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            this.setState({movies: data});
        });
    }

    /**
     * This method renders all movies stored in the
     * component state.
     */
    render(){
        return(
            <div className="container">
                <div className="movie-list">
                    {this.state.movies.map(movie => {
                        return(
                            <article key={movie.id} className="movie">
                                <strong>{movie.nome}</strong>
                                <img src={movie.foto} alt="movie cover"/>
                                <Link to={`/movie/${movie.id}`}>Acessar</Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Home;