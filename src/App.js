import React from "react";
import MovieList from "./movieList";
import Navbar from "./navbar";
import { movies } from "./movieData";
class App extends React.Component{
  constructor(){
    super();
    this.state={
        movies:movies,
        cartCount:0
    }
}
handleIncStar=(movie)=>{
    const {movies}=this.state;
    const mId=movies.indexOf(movie)
    if(movies[mId].star>=5){
        return;
    }
    movies[mId].star +=0.5;
    this.setState({
        movies:movies
    })
}

handleDecStars=(movie)=>{
    const {movies}=this.state;
    const mId=movies.indexOf(movie)
    if(movies[mId].star<=0){
        return;
    }
    movies[mId].star-=0.5;
    this.setState({
        movies:movies
    })

}

favouriteHandler=(movie)=>{
  const {movies}=this.state;
  const mId=movies.indexOf(movie);
  movies[mId].fav=!movies[mId].fav;
    this.setState({
      movies:movies
    })
}

cartHandler=(movie)=>{
  let {movies,cartCount}=this.state
  const mId=movies.indexOf(movie)
  movies[mId].cart=!movies[mId].cart;
  if(movies[mId].cart){
    cartCount+=1
  }
  else{
    cartCount-=1
  }
  
    this.setState({
        movies,
        cartCount
    })
}
  render(){
    const{movies,cartCount}=this.state;
  return (
    <>

    <Navbar cartCount={cartCount}/>

    <MovieList movies={movies} addStars={this.handleIncStar}
                decStars={this.handleDecStars} toggleFav={this.favouriteHandler}
                toggleCart={this.cartHandler} />
    </>
  );
}
}
export default App;
