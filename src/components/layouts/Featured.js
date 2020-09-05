import React, {useContext, useEffect} from 'react'
import Spinner from '../Spinner';
import MovieContext from '../../context/movie/movieContext';
import VideoPlayer from './VideoPlayer';

export default function Featured() {
    const movieContext = useContext(MovieContext);
    useEffect(()=>{
        setTimeout(function(){
            movieContext.setShowPreview()
        }, 15000);
        
    }, [])

    const {title, genres, poster_path, vote_average, release_date, original_name, first_air_date, overview, backdrop_path} = movieContext.featured;
    
    if(movieContext.featured === {}){
        return <Spinner/>
    }else{
       
    return (
        <div className='featured'>
            <div style={{display:'flex', width:'100%'}}>
            <div style={{width:'25%', backgroundColor:'black'}}></div>
            <div style={{width:'75%'}}>{!movieContext.showPreview ? (backdrop_path && <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt=""></img>) : <div className="featured-videoPlayer" ><VideoPlayer videoUrl={movieContext.featuredVideo}/></div>}</div>
            <div className='overlay-left'></div>
            <div className='overlay'></div>
        </div>
            {movieContext.featured && <div className='featured-details'>
                <div><i className="fas fa-star fa-xs" style={{color:'rgb(253, 151, 64)',marginRight:'0.3rem'}}></i><p><strong> {vote_average}</strong></p> <p>{genres && genres.map((genre)=>(<span key={genre.id}> | {genre.name}</span>))}</p></div>
                <h2>{title === undefined ? (original_name && original_name.slice(0, 50)+'...') : title && title.slice(0, 50)+'...'}</h2>
                <p>{overview && overview.slice(0, 200)+'...'}</p>
                <div className='featured-buttons'><button className='button'><i className="fas fa-play"></i> WATCH</button><button className='button'><i className="fas fa-plus"></i> ADD TO LIST</button></div>
            </div>}
        </div>
    )
    }
}
