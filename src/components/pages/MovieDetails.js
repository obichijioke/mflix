import React,{useContext, useEffect} from 'react'
import VideoPlayer from '../layouts/VideoPlayer';
import MovieContext from '../../context/movie/movieContext';
import RelatedItems from '../layouts/RelatedItems';

const MovieDetails = (props) => {
    const movieContext = useContext(MovieContext);
    const {title, genres, poster_path, vote_average, release_date, original_name, first_air_date, overview, backdrop_path} = movieContext.movieDetails;

    useEffect(()=>{
        
        movieContext.getMovieDetails(props.match.params.name, 'movie');
        setTimeout(function(){
            movieContext.setShowPreview()
        }, 15000);
    }, [])

    return (
        <div className='details-page'>
        <div style={{display:'flex', width:'100%'}}>
            <div style={{width:'25%', backgroundColor:'black'}}></div>
            <div style={{width:'75%', height:'675px'}}>{!movieContext.showPreview ? ((movieContext.movieDetails.backdrop_path || movieContext.movieDetails.poster_path) !== undefined && (movieContext.movieDetails.backdrop_path ? <img style={{height:'675px', width:'100%'}} src={`https://image.tmdb.org/t/p/original/${movieContext.movieDetails.backdrop_path}`} alt=""></img> : <img style={{height:'675px', width:'100%', objectFit:'cover'}} src={`https://image.tmdb.org/t/p/original/${movieContext.movieDetails.poster_path}`} alt=""></img>)) : <VideoPlayer videoUrl={movieContext.preview}/>}</div>
            <div className='overlay-left'></div>
            <div className='overlay'></div>
        </div>
            {movieContext.featured && <div className='featured-details row'>
            <img style={{height:'400px', marginRight:'1.5rem', borderRadius:'20px'}} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""></img>
            <div style={{width:'70%'}}>
                <div>
                <div><i className="fas fa-star fa-xs" style={{color:'rgb(253, 151, 64)',marginRight:'0.3rem'}}></i><p><strong> {vote_average}</strong></p> <p>{genres && genres.map((genre)=>(<span key={genre.id}> | {genre.name}</span>))}</p></div>
                <h2>{title === undefined ? original_name && original_name.slice(0, 40)+'...' : title && title.slice(0, 40)+'...'}</h2>
                <h5 style={{color:'white', display:'block', marginBottom:'0px'}}>Overview</h5>
                <p>{overview && overview.slice(0, 200)+'...'}</p>
                </div>
            </div>
            <div style={{width:'30%'}}><button className='play-btn'></button></div>
            </div>}
            
            
            
            <div className='container'>
                <RelatedItems/>
            </div>
        </div>
    )
}

export default MovieDetails;