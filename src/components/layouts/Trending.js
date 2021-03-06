import React,{useContext} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieContext from '../../context/movie/movieContext'
import SliderContainer from '../SliderContainer';


const Trending = ()=> {
  const movieContext = useContext(MovieContext);
    
    return (
        
        <div className='trending'>
            <div style={{position:'relative', backgroundColor:'#14141d', display:'flex'}}>
            <div className="most-watched-title">
                <h3>Popular Movies and Series to Watch Now</h3>
                <p>Most watched Movies and TV Shows</p>
            </div>
            
            <SliderContainer/>
            </div>
            
        </div>
    )
}

export default Trending;