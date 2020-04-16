import React,{useContext} from 'react';
import '../../App.css';
import logo from '../../images/logo.png'
import {NavLink} from 'react-router-dom'
import MovieContext from '../../context/movie/movieContext'


export default function MenuBar(props) {
  const movieContext = useContext(MovieContext);
  return ( 


            <nav className='nav' style={movieContext.showPreview ? {backgroundColor:'black', borderBottom:'0px'}:{}}>
                <img className='logo' src={logo} alt='logo' />
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/'>Movies</NavLink></li>
                    <li><NavLink to='/'>Series</NavLink></li>
                    <li><NavLink to='/'>My List <span><i className="fas fa-chevron-down"></i></span></NavLink></li>
                </ul>
                    <ul>
                        <li><NavLink to='/'><i className="fas fa-search"></i></NavLink></li>
                        <li><NavLink to='/'><i className="fas fa-bell"></i></NavLink></li>
                        <li><NavLink to='/'><i className="fas fa-user-circle"></i></NavLink></li>
                    </ul>
            </nav>
   
  );
}

