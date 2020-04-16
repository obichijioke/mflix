import React, {useEffect, useContext} from 'react';
import Featured from './components/layouts/Featured';
import Trending from './components/layouts/Trending';
import MovieContext from './context/movie/movieContext'



function Home() {
 const movieContext = useContext(MovieContext);
  
 useEffect(() => {
    movieContext.setTrending();
    movieContext.setMovieList();
    
    
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Featured/>
      <Trending/>
      </div>
  );
}

export default Home;
