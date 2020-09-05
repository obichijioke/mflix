import React,{useContext} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieContext from '../../context/movie/movieContext'
import SliderContainer from '../SliderContainer';
import MoviesList from '../layouts/MoviesList';


const TvSeries = ()=> {
  const movieContext = useContext(MovieContext);
    
    return (
        
        <div className='trending'>
            <div style={{marginTop:'4rem'}}>
            
                <MoviesList movieType={'tv'}/>
            
            </div>
        </div>
    )
}

export default TvSeries;