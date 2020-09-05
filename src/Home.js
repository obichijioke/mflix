import React, {useEffect, useContext} from 'react';
import Featured from './components/layouts/Featured';
import Trending from './components/layouts/Trending';
import MovieContext from './context/movie/movieContext'
import TvSlider from './components/layouts/TvSlider';
import MovieSlider from './components/layouts/MovieSlider.js';



function Home() {
 const movieContext = useContext(MovieContext);
  
 useEffect(() => {
    movieContext.setTrending();
    movieContext.setMovies();
    movieContext.setTvshows();
    
    
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Featured/>
      <Trending/>
      <TvSlider/>
      <MovieSlider/>
      </div>
  );
}

export default Home;
