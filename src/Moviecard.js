import React from "react";

export default class MovieCard extends React.Component{
    

    

    render(){
        const {title,plot,price,rating,star,fav,cart,poster}=this.props.movies;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src={poster}/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs.{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">

                                    <img className="str-btn" alt="star-btn" 
                                        src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                                        onClick={()=>this.props.decStars(this.props.movies)}/>

                                    <img className="stars" alt="decrease" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"/>

                                    <img className="str-btn" alt="increase" 
                                        src="https://cdn-icons-png.flaticon.com/128/32/32563.png" 
                                            onClick={()=>{this.props.addStars(this.props.movies)}}/>

                                    <span className="starCount"> {star}</span>
                                    </div>
                                    
                                    <button className={fav?"unfavourite-btn":"favourite-btn"}
                                        onClick={()=>{this.props.toggleFav(this.props.movies)}}>
                                            {fav?"unfavourite":"favourite"}
                                        </button>
                                    
                                    <button className={cart?"unfavourite-btn":"cart-btn"}
                                        onClick={()=>{this.props.toggleCart(this.props.movies)}}>
                                            {cart?"remove":"add to cart"}
                                        </button>
                                    

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}