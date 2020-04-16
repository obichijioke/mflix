import React, {useContext, useEffect} from 'react'
import joker from '../../images/joker.jpg'
import Spinner from '../Spinner';
import MovieContext from '../../context/movie/movieContext';
import VideoPlayer from './VideoPlayer';

export default function Featured() {
    const movieContext = useContext(MovieContext);
    useEffect(()=>{
        setTimeout(function(){
            videoCheck();
        }, 5000);
        
    }, [])

    const videoCheck = () =>{

        if(movieContext.featuredVideo === null){
             console.log('no preview video')
        }else{
            movieContext.setShowPreview()
        }
    }
    

    const {title, poster_path, vote_average, release_date, original_name, first_air_date, overview, backdrop_path} = movieContext.featured;
    if(movieContext.featured ==={}){
        return <Spinner/>
    }else{
    return (
        <div className='featured'><div className='overlay'>
            {!movieContext.showPreview ? <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt=""></img> : <div className="featured-videoPlayer" ><VideoPlayer videoUrl={movieContext.featuredVideo}/></div>}
            </div>
            <div className='featured-details'>
                <p>Duration: <span>1h 47m</span></p>
                <div><i className="fas fa-star fa-xs" style={{color:'rgb(253, 151, 64)',marginRight:'0.3rem'}}></i><p><strong> {vote_average}</strong></p> <p>Action | Adventure | Sci-fi</p></div>
                <h2>{title === undefined ? original_name : title}</h2>
                <p>{overview}</p>
                <div className='featured-buttons'><button className='button'><i className="fas fa-play"></i> WATCH</button><button className='button'><i className="fas fa-plus"></i> ADD TO LIST</button></div>
                
            </div>
            <div className='slide-nav'><i className="fas fa-minus"></i><i className="fas fa-minus"></i><i className="fas fa-minus"></i></div>
        </div>
    )
    }
}
