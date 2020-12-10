import React, { Component } from 'react';
import './movie.css'

/**
 * This component representes the movie details page
 */
class Movie extends Component{

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
            movieDatas: []
        }
        this.loadMovie = this.loadMovie.bind(this);
    }

    /**
     * This method is executed when the component
     * is mount and it call the loadMovie() method.
     */
    componentDidMount(){
        this.loadMovie();
    }

    /**
     * This method makes a requisition using fetch api
     * and stores the json in the component state.
     * 
     * The json returned contains informations about a
     * movie.
     */
    loadMovie(){
        let {id:movieId} = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${movieId}`;
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            this.setState({movieDatas: data});
        });
    }

    /**
     * This method renders the informations about a
     * movie.
     */
    render(){
        return(
            <div className="movieInfo">
                <article>
                    <h1>{this.state.movieDatas.nome}</h1>
                    {this.state.movieDatas.length !== 0 &&
                        <img src={this.state.movieDatas.foto} alt="movie cover"/> 
                    }
                    {this.state.movieDatas.length !== 0 &&
                        <h3>Sinopse</h3>
                    }
                    <p>{this.state.movieDatas.sinopse}</p>
                </article>          
            </div>
        );
    }
}

export default Movie;