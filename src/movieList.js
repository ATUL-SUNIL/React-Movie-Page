import React from "react";
import MovieCard from "./Moviecard";

export default class MovieList extends React.Component{
    

    render(){
        //const {title,plot,price,rating,stars,fav,cart,poster}=this.state.movies;
        const{movies ,addStars,decStars,toggleFav,toggleCart}=this.props;
        return (
            <>
            {movies.map((movie)=>(
                <MovieCard movies={movie} 
                          key={movie.id}  
                          addStars={addStars}
                          decStars={decStars}
                          toggleCart={toggleCart}
                          toggleFav={toggleFav}
                />
            ))}
            
            
            

            </>
        )
    }
}