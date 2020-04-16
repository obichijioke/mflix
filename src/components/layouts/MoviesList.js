import React, {useContext} from 'react'
import Cards from './Cards';
import MovieContext from '../../context/movie/movieContext'
import Spinner from '../Spinner';

export default function MoviesList() {
    const movieContext = useContext(MovieContext);
        if(movieContext.loading){
            return <Spinner/>
        }else{
            return (
        <div className='container cardContainer'>
            {movieContext.movieList.map((item, i) =>(
                <div key={i} style={{width:'calc(100% / 5)', minHeight:'300px', display:'block'}}>
                    <Cards carditem={item} />
                </div>
            ))}
        </div>
    )
        }
    
}
