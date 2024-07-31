import React from "react";
import styled from "styled-components";

const Nav=styled.div`
width:100%;
        height:70px;
        background-color:cadetblue;
        display:flex;
        justify-content:space-between;
        align-items:center;
        position:relative;
`
class Navbar extends React.Component{
   
    render(){
        let {cartCount}=this.props;
        console.log(cartCount)
        return (
            <>
            <Nav>
                <div style={styles.title}>
                    Movie-App</div>
                <div style={styles.cartContainer}>
                    <img alt="cart icon" 
                        src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" 
                        style={styles.cartIcon}/>
                    <span style={styles.cartCount}>{cartCount}</span>
                </div>
            </Nav>
            </>
        )
    }
}

export default Navbar;

const styles={
    title:{
        fontSize:30,
        color:"#fff",
        fontWeight:600,
        fontFamily:"Montserrat",
        textTransform:"uppercase",
        marginLeft:20
    },
    cartContainer:{
        position:"relative",
        cursor:"pointer"
    },
    cartIcon:{
        height:48,
        marginRight:20
    },
    cartCount:{
        background:"orange",
        borderRadius:"50%",
        padding:"4px 8px",
        position:"absolute",
        right:10,
        top:-5,
        fontSize:12
    }
    
}