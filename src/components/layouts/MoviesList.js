import React, {useContext, useEffect, useState} from 'react'
import Card from './Card';
import MovieContext from '../../context/movie/movieContext'
import Spinner from '../Spinner';
import { Button } from 'antd';

const MoviesList = ({movieType}) => {
    const movieContext = useContext(MovieContext);
    const [page, setPage] = useState(1);
    const [button, setButton] = useState(false);
    const [movieRun, setMovieRun] = useState(false);

    useEffect(()=>{
        handleEffect();
    }, [movieContext.movieList])

    const handleEffect = () => {
        !movieRun && movieContext.setMovieList(movieType);
        setMovieRun(true);
        setButton(false);
    }

    const handleClick = () => {
        movieContext.loadMore(page + 1, movieType);
        setPage(page+1);
        setButton(true);
    }

    
        if(movieContext.loading){
            return <Spinner/>
        }else{
            return (
                
        <div className='container cardContainer'>
                
        {
              movieContext.movieList.map((item, i) =>(
                <div key={i} style={{width:'calc(100% / 5)', minHeight:'300px', display:'block'}}>
                    <Card carditem={item} />
                </div>
            )) 
        }
            
            <Button type="primary" size="large" loading={button} onClick={handleClick}>Load More</Button>
        </div>
    )
        }
    
}

export default MoviesList;